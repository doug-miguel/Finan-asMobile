import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateLogin from "../pages/CreateLogin";
import EditProfile from "../pages/EditProfile";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="Createlogin"
        component={CreateLogin}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
