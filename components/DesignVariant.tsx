"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";

export type DesignVariant = "v1" | "v2" | "v3" | "v4" | "v5" | "v6";

const VARIANTS: readonly DesignVariant[] = ["v1", "v2", "v3", "v4", "v5", "v6"];
const STORAGE_KEY = "cityclean-design-variant-v3";
const listeners = new Set<() => void>();
let currentVariant: DesignVariant = "v4";

function isVariant(value: unknown): value is DesignVariant {
  return VARIANTS.includes(value as DesignVariant);
}

function readPreferredVariant(): DesignVariant {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("design");
    if (isVariant(fromUrl)) {
      return fromUrl;
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    return isVariant(raw) ? raw : "v4";
  } catch {
    return "v4";
  }
}

function persistVariant(next: DesignVariant, syncUrl: boolean) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore write failures (private mode, etc.)
  }

  if (typeof document !== "undefined") {
    document.documentElement.dataset.variant = next;
  }

  if (syncUrl) {
    const url = new URL(window.location.href);
    if (url.searchParams.has("design")) {
      url.searchParams.set("design", next);
      window.history.replaceState(null, "", url);
    }
  }
}

function setStoreVariant(next: DesignVariant, syncUrl: boolean) {
  currentVariant = next;
  persistVariant(next, syncUrl);
  listeners.forEach((listener) => listener());
}

function getSnapshot(): DesignVariant {
  if (typeof window !== "undefined") {
    const preferred = readPreferredVariant();
    if (currentVariant !== preferred) {
      currentVariant = preferred;
    }
  }

  return currentVariant;
}

function getServerSnapshot(): DesignVariant {
  return "v4";
}

function subscribe(callback: () => void) {
  listeners.add(callback);

  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    const next = isVariant(event.newValue) ? event.newValue : "v4";
    setStoreVariant(next, false);
  };

  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

type DesignVariantContextValue = {
  variant: DesignVariant;
  setVariant: (next: DesignVariant) => void;
};

const DesignVariantContext = createContext<DesignVariantContextValue | null>(null);

export function DesignVariantProvider({ children }: { children: React.ReactNode }) {
  const variant = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    setStoreVariant(readPreferredVariant(), false);
  }, []);

  const setVariant = useCallback((next: DesignVariant) => {
    setStoreVariant(next, true);
  }, []);

  const value = useMemo(() => ({ variant, setVariant }), [variant, setVariant]);

  return <DesignVariantContext.Provider value={value}>{children}</DesignVariantContext.Provider>;
}

export function useDesignVariant() {
  const ctx = useContext(DesignVariantContext);
  if (!ctx) {
    throw new Error("useDesignVariant must be used within DesignVariantProvider");
  }
  return ctx;
}
