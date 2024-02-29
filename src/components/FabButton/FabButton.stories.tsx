import type { Meta, StoryObj } from "@storybook/react";

import FabOption from "./FabButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/FabButton",
  component: FabOption,
  tags: ["autodocs"],
} satisfies Meta<typeof FabOption>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: "+1",
  },
};
