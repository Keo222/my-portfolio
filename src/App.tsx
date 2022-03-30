import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled/styled";

// PAGES
import Home from "./pages/Home";

// COMPONENTS
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
