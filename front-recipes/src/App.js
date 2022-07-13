import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRoutes } from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <AppRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
