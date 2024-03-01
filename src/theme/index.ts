"use client";

import { createTheme } from "@mui/material/styles";
import typography from "./typography";

const theme = createTheme({
  typography,
  components: {
    MuiInputBase: {
      defaultProps: {
        sx: {
          borderRadius: "50px",
          fontWeight: 500,
          background: "#ff7f00",
          color: "#fff",
          input: {
            fontSize: 20,
            textAlign: "center",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#1574F5",
      dark: "#205A6D",
    },
    secondary: {
      main: "#FF8000",
      dark: "#E67300",
    },
    info: {
      main: "#0A3847",
    },
  },
});

export default theme;
