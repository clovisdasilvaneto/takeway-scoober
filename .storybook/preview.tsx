import React from "react";
import type { Preview } from "@storybook/react";
import RootProvider from "../src/providers/RootProvider";
import GlobalStyles from "../src/theme/globals";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <RootProvider>
        {GlobalStyles}

        <Story />
      </RootProvider>
    ),
  ],
};

export default preview;
