import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { themes, type AppTheme, type ThemeMode } from "./theme";

const THEME_STORAGE_KEY = "recurrly.themeMode";

type ThemeContextValue = {
  mode: ThemeMode;
  theme: AppTheme;
  isReady: boolean;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

const isThemeMode = (value: string | null): value is ThemeMode =>
  value === "light" || value === "dark";

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setModeState] = useState<ThemeMode>("light");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    AsyncStorage.getItem(THEME_STORAGE_KEY)
      .then((storedMode) => {
        if (isMounted && isThemeMode(storedMode)) {
          setModeState(storedMode);
        }
      })
      .catch((error: unknown) => {
        console.error("Unable to load the saved theme preference.", error);
      })
      .finally(() => {
        if (isMounted) {
          setIsReady(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const setMode = useCallback((nextMode: ThemeMode) => {
    setModeState(nextMode);
    AsyncStorage.setItem(THEME_STORAGE_KEY, nextMode).catch(
      (error: unknown) => {
        console.error("Unable to save the theme preference.", error);
      },
    );
  }, []);

  const value = useMemo(
    () => ({ mode, theme: themes[mode], isReady, setMode }),
    [isReady, mode, setMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider.");
  }

  return context;
}
