import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Screens
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Login from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Register from "./app/screens/RegisterScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import Screen from "./app/components/Screen";
import Text from "./app/components/Text";
import { Button } from "react-native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";

const Tweets = () => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweet"
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
