import React from "react";
import { AuthProvider } from "./src/contexts/AuthContext";
import Navigation from "./src/navigation";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/config/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ThemeProvider>
  );
}
