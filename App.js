import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import AuthNavigator from "./app/navigation/AuthNavigator";

import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
