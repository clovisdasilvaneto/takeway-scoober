import type { Meta, StoryObj } from "@storybook/react";

import GameOptions from "./GameOptions";
import { Box } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/GameOptions",
  component: GameOptions,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box bgcolor="#fff" style={{ padding: "2rem" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof GameOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
