import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { fontFamilies } from "../../../theme/theme";
import { useTheme } from "../../../theme/ThemeProvider";
import {
  formatCurrency,
  formatRenewalDate,
  getNextRenewalDate,
  type Subscription,
} from "../data/subscriptions";
import { SectionHeading } from "./SectionHeading";

type SubscriptionListProps = {
  subscriptions: Subscription[];
};

export function SubscriptionList({ subscriptions }: SubscriptionListProps) {
  const { theme } = useTheme();

  return (
    <View>
      <SectionHeading
        title="All subscriptions"
        subtitle={`${subscriptions.length} services you keep track of`}
      />
      <View style={{ gap: 10 }}>
        {subscriptions.length ? (
          subscriptions.map((subscription) => (
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
                accessibilityLabel={`${subscription.name}, ${subscription.category}, renews ${formatRenewalDate(getNextRenewalDate(subscription.renewalDay))}, ${formatCurrency(subscription.monthlyPrice)} per month`}
                style={({ pressed }) => ({
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 14,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: theme.border,
                  backgroundColor: theme.surface,
                  opacity: pressed ? 0.78 : 1,
                })}
              >
                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", minWidth: 0 }}>
                  <View
                    style={{
                      width: 46,
                      height: 46,
                      flexShrink: 0,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 15,
                      backgroundColor: theme.logoSurface,
                      borderWidth: 1,
                      borderColor: theme.border,
                    }}
                  >
                    <Image
                      source={subscription.icon}
                      resizeMode="contain"
                      style={{ width: 29, height: 29 }}
                    />
                  </View>
                  <View style={{ flex: 1, minWidth: 0, marginLeft: 12 }}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: theme.foreground,
                        fontFamily: fontFamilies.semibold,
                        fontSize: 14,
                      }}
                    >
                      {subscription.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: theme.mutedForeground,
                        fontFamily: fontFamilies.regular,
                        fontSize: 11,
                        marginTop: 4,
                      }}
                    >
                      {subscription.category} · Renews{" "}
                      {formatRenewalDate(
                        getNextRenewalDate(subscription.renewalDay),
                      )}
                    </Text>
                  </View>
                </View>
                <View style={{ alignItems: "flex-end", marginLeft: 8 }}>
                  <Text
                    style={{
                      color: theme.foreground,
                      fontFamily: fontFamilies.bold,
                      fontSize: 14,
                    }}
                  >
                    {formatCurrency(subscription.monthlyPrice)}
                  </Text>
                  <Text
                    style={{
                      color: theme.mutedForeground,
                      fontFamily: fontFamilies.regular,
                      fontSize: 10,
                      marginTop: 3,
                    }}
                  >
                    / month
                  </Text>
                </View>
              </Pressable>
            </Link>
          ))
        ) : (
          <Text
            style={{
              color: theme.mutedForeground,
              fontFamily: fontFamilies.regular,
              fontSize: 13,
            }}
          >
            No subscriptions yet.
          </Text>
        )}
      </View>
    </View>
  );
}
