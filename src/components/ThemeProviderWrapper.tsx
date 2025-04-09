
"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import {darkTheme,lightTheme} from "@/utils/theme";

export default function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* <CssBaseline />*/}
      {children}
    </ThemeProvider>
  );
}
