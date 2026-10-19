import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { tabs } from "../../../constants/data";
import { fontFamilies } from "../../theme/theme";
import { useTheme } from "../../theme/ThemeProvider";

type TabIconProps = {
  focused: boolean;
  icon: (typeof tabs)[number]["icon"];
  tintColor: string;
};

const TabIcons = ({ focused, icon, tintColor }: TabIconProps) => (
  <View
    style={{
      width: 36,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <View
      style={{
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        backgroundColor: focused ? "#EE7A53" : "transparent",
      }}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
          opacity: focused ? 1 : 0.8,
          tintColor,
        }}
        resizeMode="contain"
      />
    </View>
  </View>
);

const TabsLayout = () => {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.mutedForeground,
        tabBarLabelStyle: {
          fontFamily: fontFamilies.semibold,
          fontSize: 10,
          lineHeight: 12,
          marginTop: 0,
        },
        tabBarItemStyle: {
          paddingTop: 0,
          paddingBottom: 0,
        },
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopWidth: 0,
          elevation: 12,
          shadowColor: theme.foreground,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.12,
          shadowRadius: 12,
        },
        tabBarBackground: () => (
          <View
            pointerEvents="none"
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: theme.surface,
                borderColor: theme.border,
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
              },
            ]}
          />
        ),
      }}
    >
      {tabs.map((tab: (typeof tabs)[number]) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcons
                focused={focused}
                icon={tab.icon}
                tintColor={
                  focused ? theme.accentForeground : theme.mutedForeground
                }
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
