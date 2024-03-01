"use client";

import React from "react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import theme from "@/theme";
import GlobalStyles from "@/theme/globals";

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      {GlobalStyles}
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
