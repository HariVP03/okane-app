import { useFonts } from "expo-font";

export const useInitApp = () => {
  const fontsLoaded = useFonts({
    poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  return { fonts: fontsLoaded };
};
