import { useFonts } from "expo-font";
import { useEffect } from "react";

export const useInitApp = () => {
  const fontsLoaded = useFonts({
    poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  // useGoogleAuth();

  return { fonts: fontsLoaded };
};
