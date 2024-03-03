"use client";

import { LogoIcon } from "@/components/Icons";
import useSocket from "@/hooks/useSocket";
import { selectIsConnect } from "@/modules/socket/socket";
import { Backdrop, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function withSocket<T>(Component: React.FC<T>) {
  return function SocketComponent(props: T) {
    useSocket();

    const isConnected: boolean = useSelector(selectIsConnect);

    const fadeInStyles = {
      opacity: isConnected ? 1 : 0,
      transition: "opacity .3s ease-out",
    };

    return (
      <>
        <Backdrop open={!isConnected}>
          <Box textAlign="center">
            <LogoIcon infinite size={80} />

            <Typography
              fontWeight={300}
              color="common.white"
              mt={2}
              variant="h4"
            >
              Connecting to the server...
            </Typography>
          </Box>
        </Backdrop>

        <Box flex={1} display="flex" flexDirection="column" sx={fadeInStyles}>
          <Component connected={isConnected} {...props} />
        </Box>
      </>
    );
  };
}

export default withSocket;
