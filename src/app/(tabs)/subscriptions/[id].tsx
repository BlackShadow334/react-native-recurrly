import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1">
      <Text>Subscription Details: {id}</Text>
      <Link href="/">Go home</Link>
    </View>
  );
};
export default SubscriptionDetails;
