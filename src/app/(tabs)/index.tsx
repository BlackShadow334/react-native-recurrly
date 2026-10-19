import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ThemedScreen } from "../../components/ThemedScreen";
import { fontFamilies } from "../../theme/theme";
import { useTheme } from "../../theme/ThemeProvider";

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemedScreen>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          backgroundColor: theme.background,
        }}
      >
        <Text
          style={{
            color: theme.foreground,
            fontFamily: fontFamilies.bold,
            fontSize: 24,
          }}
        >
          Welcome to Recurrly
        </Text>
        <Text
          style={{
            color: theme.mutedForeground,
            fontFamily: fontFamilies.regular,
            marginTop: 8,
          }}
        >
          How are you doing?
        </Text>
        <Link
          href="/onboarding"
          style={{
            marginTop: 16,
            borderRadius: 14,
            backgroundColor: theme.accent,
            color: theme.accentForeground,
            padding: 16,
            overflow: "hidden",
            fontFamily: fontFamilies.semibold,
          }}
        >
          Go to Onboarding
        </Link>
        <Link
          href="/(auth)/sign-in"
          style={{
            marginTop: 12,
            borderRadius: 14,
            backgroundColor: theme.surfaceMuted,
            color: theme.foreground,
            padding: 16,
            overflow: "hidden",
            fontFamily: fontFamilies.semibold,
          }}
        >
          Go to Sign In
        </Link>
        <Link
          href="/(auth)/sign-up"
          style={{
            marginTop: 12,
            borderRadius: 14,
            backgroundColor: theme.surfaceMuted,
            color: theme.foreground,
            padding: 16,
            overflow: "hidden",
            fontFamily: fontFamilies.semibold,
          }}
        >
          Go to Sign Up
        </Link>
        <Link
          href={{ pathname: "/subscriptions/[id]", params: { id: "spotify" } }}
          style={{
            color: theme.accent,
            fontFamily: fontFamilies.medium,
            marginTop: 20,
          }}
        >
          View Spotify Subscription
        </Link>
        <Link
          href={{ pathname: "/subscriptions/[id]", params: { id: "claudie" } }}
          style={{
            color: theme.accent,
            fontFamily: fontFamilies.medium,
            marginTop: 12,
          }}
        >
          View Claudie&apos;s Subscription
        </Link>
      </View>
    </ThemedScreen>
  );
}
