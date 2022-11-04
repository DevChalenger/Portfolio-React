import "./styles/css/app/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import {
  BrowserRouter as Router,
  Routes as Navigation,
  Route,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import useTheme from "./utils/Theme";

import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const { currentTheme } = useTheme();

  return (
    <div className={`app-container ${currentTheme}`}>
      <HelmetProvider>
        <Router>
          <Header />
          <Navigation>
            <Route exact path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Navigation>
          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;
