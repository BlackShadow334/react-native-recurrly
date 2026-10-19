export const themeModes = ["light", "dark"] as const;
export type ThemeMode = (typeof themeModes)[number];

export const themes = {
  light: {
    mode: "light",
    background: "#FFF9E3",
    surface: "#FFF8E7",
    surfaceMuted: "#F6EECF",
    foreground: "#081126",
    mutedForeground: "#68675F",
    border: "#E9E1CA",
    primary: "#081126",
    accent: "#EE7A53",
    accentForeground: "#081126",
    destructive: "#DC2A2A",
    subscription: "#8FD1BD",
    statusBar: "dark",
  },
  dark: {
    mode: "dark",
    background: "#081126",
    surface: "#111D35",
    surfaceMuted: "#1B2942",
    foreground: "#FFF9E3",
    mutedForeground: "#AAB4C8",
    border: "#293750",
    primary: "#FFF9E3",
    accent: "#EE7A53",
    accentForeground: "#081126",
    destructive: "#FF7777",
    subscription: "#8FD1BD",
    statusBar: "light",
  },
} as const;

export type AppTheme = (typeof themes)[ThemeMode];

export const fontFamilies = {
  light: "PlusJakartaSans-Light",
  regular: "PlusJakartaSans-Regular",
  medium: "PlusJakartaSans-Medium",
  semibold: "PlusJakartaSans-SemiBold",
  bold: "PlusJakartaSans-Bold",
  extrabold: "PlusJakartaSans-ExtraBold",
} as const;
