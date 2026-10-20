import { Text, View } from "react-native";
import { fontFamilies } from "../../../theme/theme";
import { useTheme } from "../../../theme/ThemeProvider";
import { formatCurrency } from "../data/subscriptions";

type BalanceCardProps = {
  monthlyTotal: number;
  subscriptionCount: number;
};

export function BalanceCard({
  monthlyTotal,
  subscriptionCount,
}: BalanceCardProps) {
  const { theme } = useTheme();

  return (
    <View
      accessibilityLabel={`Monthly subscription total ${formatCurrency(monthlyTotal)} across ${subscriptionCount} subscriptions`}
      style={{
        overflow: "hidden",
        padding: 22,
        borderRadius: 26,
        backgroundColor: theme.balanceBackground,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: 150,
          height: 150,
          borderRadius: 75,
          borderWidth: 26,
          borderColor: "rgba(255,255,255,0.12)",
          right: -34,
          top: -56,
        }}
      />
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: fontFamilies.semibold,
          fontSize: 13,
        }}
      >
        Estimated monthly total
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: fontFamilies.extrabold,
          fontSize: 36,
          letterSpacing: -1.2,
          marginTop: 10,
        }}
      >
        {formatCurrency(monthlyTotal)}
      </Text>
      <View
        style={{
          alignSelf: "flex-start",
          marginTop: 18,
          paddingHorizontal: 12,
          paddingVertical: 7,
          borderRadius: 14,
          backgroundColor: "rgba(8,17,38,0.1)",
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontFamily: fontFamilies.medium,
            fontSize: 11,
          }}
        >
          Sample total · {subscriptionCount} subscriptions
        </Text>
      </View>
    </View>
  );
}
