"use client";

import { ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AnimatePresence } from "framer-motion";

import StoreProvider from "../StoreProvider";
import ThemeProvider from "../ThemeProvider";
import { SessionProvider } from "next-auth/react";

interface RootProviderProos {
  children: ReactNode;
}

function RootProvider({ children }: RootProviderProos) {
  return (
    <SessionProvider>
      <StoreProvider>
        <AppRouterCacheProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </StoreProvider>
    </SessionProvider>
  );
}

export default RootProvider;
