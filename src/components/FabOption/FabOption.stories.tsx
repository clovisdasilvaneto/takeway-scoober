import type { Meta, StoryObj } from "@storybook/react";

import FabOption from "./FabOption";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/FabOption",
  component: FabOption,
  tags: ["autodocs"],
} satisfies Meta<typeof FabOption>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Dark: Story = {
  args: {
    color: "dark",
    label: "+1",
  },
};

export const Main: Story = {
  args: {
    color: "main",
    label: "0",
  },
};
