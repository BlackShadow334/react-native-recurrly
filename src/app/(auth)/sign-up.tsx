import { Link } from "expo-router";
import { Text, View } from "react-native";
import { ThemedScreen } from "../../components/ThemedScreen";
import { fontFamilies } from "../../theme/theme";
import { useTheme } from "../../theme/ThemeProvider";

const SignUp = () => {
  const { theme } = useTheme();

  return (
    <ThemedScreen>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.background,
        }}
      >
        <Text
          style={{
            color: theme.foreground,
            fontFamily: fontFamilies.semibold,
            fontSize: 20,
          }}
        >
          Sign Up
        </Text>
        <Link
          href="/(auth)/sign-in"
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
          Sign In
        </Link>
      </View>
    </ThemedScreen>
  );
};
export default SignUp;
