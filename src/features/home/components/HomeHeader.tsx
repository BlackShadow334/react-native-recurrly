import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { fontFamilies } from "../../../theme/theme";
import { useTheme } from "../../../theme/ThemeProvider";

const avatar = require("../../../../assets/images/avatar.png");
const menuIcon = require("../../../../assets/icons/menu.png");
const addIcon = require("../../../../assets/icons/plus.png");

type HeaderActionProps = {
  accessibilityLabel: string;
  href: "/(tabs)/settings" | "/(tabs)/subscriptions";
  icon: number;
};

function HeaderAction({ accessibilityLabel, href, icon }: HeaderActionProps) {
  const { theme } = useTheme();

  return (
    <Link href={href} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        style={({ pressed }) => ({
          width: 42,
          height: 42,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
          backgroundColor: theme.background,
          opacity: pressed ? 0.72 : 1,
        })}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 19,
            height: 19,
            tintColor: theme.foreground,
          }}
        />
      </Pressable>
    </Link>
  );
}

export function HomeHeader() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderRadius: 26,
        backgroundColor: theme.headerBackground,
        borderWidth: 1,
        borderColor: theme.border,
        gap: 12,
      }}
    >
      <Image
        source={avatar}
        accessibilityLabel="Profile picture"
        resizeMode="cover"
        style={{
          width: 58,
          height: 58,
          borderRadius: 29,
          borderWidth: 2,
          borderColor: theme.accent,
        }}
      />
      <View style={{ flex: 1, minWidth: 0 }}>
        <Text
          style={{
            color: theme.headerForeground,
            fontFamily: fontFamilies.medium,
            fontSize: 12,
            opacity: 0.72,
          }}
        >
          Welcome back
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: theme.headerForeground,
            fontFamily: fontFamilies.bold,
            fontSize: 18,
            marginTop: 2,
          }}
        >
          Rupesh
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <HeaderAction
          accessibilityLabel="Open subscriptions"
          href="/(tabs)/subscriptions"
          icon={addIcon}
        />
        <HeaderAction
          accessibilityLabel="Open settings"
          href="/(tabs)/settings"
          icon={menuIcon}
        />
      </View>
    </View>
  );
}
