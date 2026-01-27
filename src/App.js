import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home';
import About from "./pages/About";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import WhyArtemis from "./pages/WhyArtemis";
import "./assets/styles/global.css";
import "./assets/styles/animations.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <main style={{ minHeight: '100vh', paddingTop: '80px', background: 'var(--gradient-background)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/why-artemis" element={<WhyArtemis />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
