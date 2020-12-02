import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
// import { AsyncStorageStatic } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Screens
import AuthNavigator from "./app/navigation/AuthNavigator";

import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { Text } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const netInfo = useNetInfo();

  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
      console.log(person, "person");
    } catch (error) {
      console.log(error);
    }
  };

  demo();

  return (
    <>
      {/* // netInfo.isInternetReachable ? ( // <Text>InternetReachable</Text>
      // ) : ( // <Text>InternetNotReachable</Text>
      // ); */}
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}
