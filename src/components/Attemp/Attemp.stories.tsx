import type { Meta, StoryObj } from "@storybook/react";

import Attemp from "./Attemp";
import { Box } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Attemp",
  component: Attemp,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box bgcolor="#fff" style={{ padding: "2rem" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Attemp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Local: Story = {
  args: {
    isLocal: true,
  },
};

export const Remote: Story = {
  args: {
    isLocal: false,
  },
};
