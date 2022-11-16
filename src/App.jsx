import "./styles/css/app/app.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useCallback, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes as Navigation,
  Route,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import useTheme from "./utils/Theme";

import Home from "./pages/Home";
import Project from "./pages/Project";

import Contact from "./pages/Contact";
import Cursor from "./components/Cursor";
import { useDispatch } from "react-redux";
import { loadProject } from "./redux/features/actions/project";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  const { currentTheme } = useTheme();

  const dispatch = useDispatch();
  const getProject = useCallback(() => {
    dispatch(loadProject());
  }, [dispatch]);

  useEffect(() => {
    getProject();
  }, [getProject]);

  return (
    <div className={`app-container ${currentTheme}`}>
      <Cursor />
      <HelmetProvider>
        <Router>
          <ScrollToTop>
            <Header />
            <Navigation>
              <Route exact path="/" element={<Home />} />
              <Route path="/project" element={<Project />} />

              <Route path="/contact" element={<Contact />} />
            </Navigation>
            <Footer />
          </ScrollToTop>
        </Router>
      </HelmetProvider>
    </div>
  );
};

export default App;
