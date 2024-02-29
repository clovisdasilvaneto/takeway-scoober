import type { Meta, StoryObj } from "@storybook/react";

import GameRooms from "./GameRooms";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/GameRooms",
  component: GameRooms,
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof GameRooms>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
};
