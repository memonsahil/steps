import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ActivityScreen from "../screens/ActivityScreen";
import ViewActivityScreen from "../screens/ViewActivityScreen";

const ActivityStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Activity"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Activity" component={ActivityScreen} />
      <Stack.Screen name="ViewActivity" component={ViewActivityScreen} />
    </Stack.Navigator>
  );
};

export default ActivityStack;
