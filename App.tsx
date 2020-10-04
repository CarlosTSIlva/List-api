import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./src/pages/HomeScreen";
import Info from "./src/pages/Info";
import Profile from "./src/pages/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{ activeTintColor: "blue" }}
        >
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="alpha-x-circle-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
            name="New Latter"
            component={Info}
          />
          <Tab.Screen
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-circle-outline"
                  color={color}
                  size={size}
                />
              ),
            }}
            name="Profile"
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
