import { Link } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { fontFamilies } from "../../../theme/theme";
import { useTheme } from "../../../theme/ThemeProvider";
import {
  formatCurrency,
  formatRenewalDate,
  getNextRenewalDate,
  type Subscription,
} from "../data/subscriptions";
import { SectionHeading } from "./SectionHeading";

type UpcomingSectionProps = {
  subscriptions: Subscription[];
};

export function UpcomingSection({ subscriptions }: UpcomingSectionProps) {
  const { theme } = useTheme();
  const upcoming = subscriptions
    .map((subscription) => ({
      ...subscription,
      renewalDate: getNextRenewalDate(subscription.renewalDay),
    }))
    .sort((first, second) => first.renewalDate.getTime() - second.renewalDate.getTime())
    .slice(0, 5);

  return (
    <View>
      <SectionHeading
        title="Upcoming"
        subtitle="Your next renewal dates"
      />
      {upcoming.length ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 12, paddingRight: 20 }}
        >
          {upcoming.map((subscription) => (
            <Link
              key={subscription.id}
              href={{
                pathname: "/subscriptions/[id]",
                params: { id: subscription.id },
              }}
              asChild
            >
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`${subscription.name}, renews ${formatRenewalDate(subscription.renewalDate)}, ${formatCurrency(subscription.monthlyPrice)}`}
                style={({ pressed }) => ({
                  width: 160,
                  padding: 15,
                  borderRadius: 22,
                  borderWidth: 1,
                  borderColor: theme.border,
                  backgroundColor: theme.surface,
                  opacity: pressed ? 0.78 : 1,
                })}
              >
                <View
                  style={{
                    width: 42,
                    height: 42,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 14,
                    backgroundColor: theme.logoSurface,
                    borderWidth: 1,
                    borderColor: theme.border,
                  }}
                >
                  <Image
                    source={subscription.icon}
                    resizeMode="contain"
                    style={{ width: 26, height: 26 }}
                  />
                </View>
                <Text
                  numberOfLines={1}
                  style={{
                    color: theme.foreground,
                    fontFamily: fontFamilies.semibold,
                    fontSize: 14,
                    marginTop: 13,
                  }}
                >
                  {subscription.name}
                </Text>
                <Text
                  style={{
                    color: theme.mutedForeground,
                    fontFamily: fontFamilies.regular,
                    fontSize: 11,
                    marginTop: 3,
                  }}
                >
                  Renews {formatRenewalDate(subscription.renewalDate)}
                </Text>
                <Text
                  style={{
                    color: theme.foreground,
                    fontFamily: fontFamilies.bold,
                    fontSize: 16,
                    marginTop: 12,
                  }}
                >
                  {formatCurrency(subscription.monthlyPrice)}
                </Text>
              </Pressable>
            </Link>
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            padding: 18,
            borderRadius: 20,
            backgroundColor: theme.surface,
          }}
        >
          <Text
            style={{
              color: theme.mutedForeground,
              fontFamily: fontFamilies.regular,
              fontSize: 13,
            }}
          >
            Add a subscription to see upcoming renewals here.
          </Text>
        </View>
      )}
    </View>
  );
}
