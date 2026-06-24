import type { ComponentType } from "react";

export type MetroColor = "blue" | "green" | "orange" | "purple" | "gray";

export type MetroIcon = ComponentType<{
  "aria-hidden"?: boolean | "true";
  className?: string;
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}>;
