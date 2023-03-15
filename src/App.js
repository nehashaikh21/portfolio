import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import NavHeader from "./components/NavHeader";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <BrowserRouter>
        <NavHeader />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop smooth />
      </BrowserRouter>
    </main>
  );
}

export default App;
