import { AttempWrapper } from "./styled";
import { getAttempVariant } from "./utils";
import { Box, Skeleton } from "@mui/material";

interface AttempLoadingProps {
  isLocal: boolean;
}

const AttempLoading = ({ isLocal }: AttempLoadingProps) => {
  const { Avatar, color, direction } = getAttempVariant(isLocal);

  return (
    <AttempWrapper direction={direction}>
      {Avatar}

      <Box display="flex" flexDirection="column" gap={1}>
        <Skeleton
          width={60}
          height={60}
          sx={{ bgcolor: color }}
          variant="circular"
        />

        <Skeleton height={50} width="100%" sx={{ mb: -2 }} />
        <Skeleton height={50} width="100%" />
      </Box>
    </AttempWrapper>
  );
};

export default AttempLoading;
