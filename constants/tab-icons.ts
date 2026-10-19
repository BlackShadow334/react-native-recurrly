import type { ImageSourcePropType } from "react-native";

export const tabIcons = {
  activity: require("../assets/icons/activity.png"),
  home: require("../assets/icons/home.png"),
  settings: require("../assets/icons/setting.png"),
  wallet: require("../assets/icons/wallet.png"),
} satisfies Record<string, ImageSourcePropType>;
