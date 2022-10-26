import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text } from "react-native";

export function TestScreen() {
  const route = useNavigation();
  return (
    <>
      <Pressable onPress={() => route.goBack()}>
        <Text>123</Text>
      </Pressable>
    </>
  );
}
