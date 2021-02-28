import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GoalsScreen from "../screens/GoalsScreen";
import GoalsListScreen from "../screens/GoalsListScreen";

const GoalsStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Goals"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Goals" component={GoalsScreen} />
      <Stack.Screen name="GoalsList" component={GoalsListScreen} />
    </Stack.Navigator>
  );
};

export default GoalsStack;
