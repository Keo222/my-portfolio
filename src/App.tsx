import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styled/themes";
import GlobalStyles from "./styled/globalStyles";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import TestLambda from "./pages/TestLambda";

// COMPONENTS
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<TestLambda />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
