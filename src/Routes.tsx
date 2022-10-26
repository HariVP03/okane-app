import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { HomeScreen } from "./screens";
import { ScreenOptions } from "./types";

const Stack = createNativeStackNavigator();

const options: ScreenOptions = {
  headerShown: false,
};

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
