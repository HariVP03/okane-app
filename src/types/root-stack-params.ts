import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
