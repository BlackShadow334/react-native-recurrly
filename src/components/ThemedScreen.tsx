import type { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../theme/ThemeProvider";

type ThemedScreenProps = {
  children: ReactNode;
};

export function ThemedScreen({ children }: ThemedScreenProps) {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: theme.background }}
    >
      {children}
    </SafeAreaView>
  );
}
