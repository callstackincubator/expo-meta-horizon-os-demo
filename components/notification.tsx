import * as Notifications from "expo-horizon-notifications";
import { Pressable, Text } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

const scheduleNotification = () =>
  Notifications.scheduleNotificationAsync({
    content: {
      title: "Notification!",
      body: "It works on Meta Horizon OS!",
    },
    trigger: null,
  });

export function NotificationButton() {
  return (
    <Pressable
      onPress={scheduleNotification}
      style={{ padding: 10, backgroundColor: "white" }}
    >
      <Text>Send notification</Text>
    </Pressable>
  );
}
