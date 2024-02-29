import type { Meta, StoryObj } from "@storybook/react";

import Output from "./Output";
import { Box, Typography } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Output",
  component: Output,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box maxWidth={198}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Output>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
  args: {
    value: "[ ( -1 + 19 )  / 3 ] = 6",
  },
};
