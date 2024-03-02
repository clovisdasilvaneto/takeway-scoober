import React from "react";
import { IconProps } from "./types";
import theme from "@/theme";

function PlayerIcon({
  size = 40,
  color = theme.palette.primary.dark,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx="20" cy="20" r="20" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 20C22.21 20 24 18.21 24 16C24 13.79 22.21 12 20 12C17.79 12 16 13.79 16 16C16 18.21 17.79 20 20 20ZM20 22C17.33 22 12 23.34 12 26V28H28V26C28 23.34 22.67 22 20 22Z"
        fill="white"
      />
    </svg>
  );
}

export default PlayerIcon;
