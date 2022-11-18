import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { UseContextProvider } from "./src/context/moduleContext";

export default function App() {
  return (
    <NavigationContainer>
      <UseContextProvider>
        <StatusBar backgroundColor="#08DAE5" barStyle="dark-content" />
        <Routes />
      </UseContextProvider>
    </NavigationContainer>
  );
}
