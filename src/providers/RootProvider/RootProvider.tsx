import React from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import StoreProvider from "../StoreProvider";
import ThemeProvider from "../ThemeProvider";

interface RootProviderProos {
  children: React.ReactNode;
}

function RootProvider({ children }: RootProviderProos) {
  return (
    <StoreProvider>
      <AppRouterCacheProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </StoreProvider>
  );
}

export default RootProvider;
