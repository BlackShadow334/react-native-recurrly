import { Tabs } from "expo-router";
import { Image, View } from "react-native";
import { tabs } from "../../../constants/data";

type TabIconProps = {
  focused: boolean;
  icon: (typeof tabs)[number]["icon"];
};

const TabIcons = ({ focused, icon }: TabIconProps) => (
  <View
    style={{
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <View
      style={{
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 18,
        backgroundColor: focused ? "#EE7A53" : "transparent",
      }}
    >
      <Image
        source={icon}
        style={{ width: 22, height: 22, opacity: focused ? 1 : 0.68 }}
        resizeMode="contain"
      />
    </View>
  </View>
);

const TabsLayout = () => (
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#EE7A53",
      tabBarInactiveTintColor: "#FFF9E3",
      tabBarLabelStyle: {
        fontSize: 10,
        fontWeight: "600",
        marginTop: 2,
      },
      tabBarItemStyle: {
        paddingTop: 4,
        paddingBottom: 2,
      },
      tabBarStyle: {
        backgroundColor: "#081126",
        borderTopWidth: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        elevation: 12,
        shadowColor: "#081126",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
      },
    }}
  >
    {tabs.map((tab: (typeof tabs)[number]) => (
      <Tabs.Screen
        key={tab.name}
        name={tab.name}
        options={{
          title: tab.title,
          tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={tab.icon} />
          ),
        }}
      />
    ))}
  </Tabs>
);

export default TabsLayout;
