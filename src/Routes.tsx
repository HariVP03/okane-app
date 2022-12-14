import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  HomeScreen,
  LoginScreen,
  PayScreen,
  ScanScreen,
  SignupScreen,
} from "./screens";
import { RootStackParamList, ScreenOptions } from "./types";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const options: ScreenOptions = {
  headerShown: false,
};

export function Routes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} options={options} />

      <Screen name="Signup" component={SignupScreen} options={options} />

      <Screen name="Login" component={LoginScreen} options={options} />

      <Screen name="Scan" component={ScanScreen} options={options} />

      <Screen name="Pay" component={PayScreen} options={options} />
    </Navigator>
  );
}
