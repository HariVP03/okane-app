import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export interface TransformedUpiId {
  prefix: string;
  raw: string;
  params: {
    am: string;
    cu: string;
    mc: string;
    mode: string;
    orgid: string;
    pa: string;
    pn: string;
    purpose: string;
    sign: string;
    tn: string;
    tr: string;
    url: string;
  };
}

export type RootStackParamList = {
  Home: undefined;
  Signup: undefined;
  Login: undefined;
  Scan: undefined;
  Pay: TransformedUpiId;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type NavigationProps<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;
