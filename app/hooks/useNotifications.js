import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      // The "granted" property always return false if use simulator, this only work in actual device
      if (!permission.granted) return;

      // const token = await Notifications.getExpoPushTokenAsync();
      const token = await Notifications.getExponentPushTokenAsync();
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
