import { Text, View } from "react-native";
import { ThemedScreen } from "../components/ThemedScreen";
import { fontFamilies } from "../theme/theme";
import { useTheme } from "../theme/ThemeProvider";

const Onboarding = () => {
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
          Onboarding
        </Text>
        <Text
          style={{
            color: theme.mutedForeground,
            fontFamily: fontFamilies.regular,
            marginTop: 8,
          }}
        >
          Let’s get started.
        </Text>
      </View>
    </ThemedScreen>
  );
};

export default Onboarding;
