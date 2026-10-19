import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { ThemedScreen } from "../../components/ThemedScreen";
import { fontFamilies } from "../../theme/theme";
import { useTheme } from "../../theme/ThemeProvider";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { theme } = useTheme();

  return (
    <ThemedScreen>
      <View
        style={{
          flex: 1,
          padding: 24,
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
          Subscription Details: {id}
        </Text>
        <Link
          href="/"
          style={{
            color: theme.accent,
            fontFamily: fontFamilies.medium,
            marginTop: 16,
          }}
        >
          Go home
        </Link>
      </View>
    </ThemedScreen>
  );
};
export default SubscriptionDetails;
