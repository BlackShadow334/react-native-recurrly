import { ScrollView } from "react-native";
import { ThemedScreen } from "../../components/ThemedScreen";
import { useTheme } from "../../theme/ThemeProvider";
import { BalanceCard } from "./components/BalanceCard";
import { HomeHeader } from "./components/HomeHeader";
import { SubscriptionList } from "./components/SubscriptionList";
import { UpcomingSection } from "./components/UpcomingSection";
import { sampleSubscriptions } from "./data/subscriptions";

export default function HomeScreen() {
  const { theme } = useTheme();
  const monthlyTotal = sampleSubscriptions.reduce(
    (total, subscription) => total + subscription.monthlyPrice,
    0,
  );

  return (
    <ThemedScreen>
      <ScrollView
        style={{ backgroundColor: theme.background }}
        contentContainerStyle={{ padding: 20, gap: 26, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <BalanceCard
          monthlyTotal={monthlyTotal}
          subscriptionCount={sampleSubscriptions.length}
        />
        <UpcomingSection subscriptions={sampleSubscriptions} />
        <SubscriptionList subscriptions={sampleSubscriptions} />
      </ScrollView>
    </ThemedScreen>
  );
}
