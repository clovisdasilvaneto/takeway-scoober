import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import StoreProvider from "../StoreProvider";

interface RootProviderProos {
  children: React.ReactNode;
}

function RootProvider({ children }: RootProviderProos) {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  );
}

export default RootProvider;
