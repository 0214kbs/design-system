"use client";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/DefaultTheme";
export default function RootLayout() {
  return (
    <html>
      <ThemeProvider theme={theme}>
        <body>
        </body>
      </ThemeProvider>
    </html>
  );
}
