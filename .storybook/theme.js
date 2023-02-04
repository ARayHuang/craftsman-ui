import { extendTheme } from "@chakra-ui/react";
import { rgba } from "polished";

const primaryColor = "#007bff"; // primary blue

export const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  colors: {
    primary: primaryColor,
    50: `${rgba(primaryColor, 0.04)}`,
    100: `${rgba(primaryColor, 0.06)}`,
    200: primaryColor,
    300: primaryColor,
    400: primaryColor,
    500: primaryColor,
    600: primaryColor,
    700: primaryColor,
    800: primaryColor,
    900: primaryColor,
  },
});
