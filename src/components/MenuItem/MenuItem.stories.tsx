import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "./MenuItem";
import { Box } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: { onClick: { action: "clicked" } },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Box maxWidth={400} style={{ padding: "2rem" }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "Sabrican",
    onClick: console.log,
  },
};
