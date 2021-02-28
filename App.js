import "react-native-gesture-handler";
import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./src/navigators/TabBar";

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <TabBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
