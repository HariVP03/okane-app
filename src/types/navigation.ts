import { RouteProp, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export interface BaseRouteParams {}

export type ScreenOptions =
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<ParamListBase, "Home">;
      navigation: any;
    }) => NativeStackNavigationOptions)
  | undefined;
