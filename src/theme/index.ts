import { extendTheme } from "native-base";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  fonts: {
    heading: "poppins-bold",
    bold: "poppins",
  },
  components: {
    Text: {
      fontFamily: "heading",
    },
  },
});
