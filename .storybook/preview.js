import React from "react";
import { CSSReset } from "@chakra-ui/react";

import { customTheme } from "./theme";

export const decorators = [
  (StoryFn) => (
    <>
      <CSSReset />
      <StoryFn />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  chakra: {
    theme: customTheme,
  },
};
