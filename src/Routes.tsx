import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { HomeScreen, LoginScreen, SignupScreen } from "./screens";
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

        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={options}
        />

        <Stack.Screen name="Login" component={LoginScreen} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
