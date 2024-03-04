import { BallonsIcon, TrophyIcon } from "@/components/Icons";
import { Typography } from "@mui/material";

export const YouWin = () => (
  <>
    <TrophyIcon />

    <Typography variant="h3" fontWeight={700} color="common.white">
      You won
    </Typography>
  </>
);

export const YouLose = () => (
  <>
    <BallonsIcon />

    <Typography variant="h3" fontWeight={700} color="common.white">
      You lose
    </Typography>
  </>
);
