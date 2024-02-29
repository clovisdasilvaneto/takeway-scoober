import theme from "@/theme";
import { FabColor } from "../FabOption/FabOption";
import { LogoIcon, PlayerIcon } from "../Icons";
import { AttempDirection } from "./types";

export const getAttempVariant = (
  isLocal: boolean,
): {
  Avatar: React.ReactNode;
  color: FabColor;
  direction: AttempDirection;
} => {
  if (isLocal)
    return {
      Avatar: <LogoIcon color={theme.palette.secondary.main} />,
      color: "dark",
      direction: "ltr",
    };

  return {
    Avatar: <PlayerIcon />,
    color: "main",
    direction: "rtl",
  };
};
