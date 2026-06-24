const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const appBasePath = rawBasePath.replace(/\/$/, "");

export function withBasePath(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href;
  }

  return `${appBasePath}${href}`;
}
