import { NativeBaseProvider } from "native-base";
import React from "react";
import { useInitApp } from "./src/hooks";
import { Routes } from "./src/Routes";
import { theme } from "./src/theme";

export default function App() {
  const {
    fonts: [fontsLoaded],
  } = useInitApp();

  if (!fontsLoaded) return null;

  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
}
