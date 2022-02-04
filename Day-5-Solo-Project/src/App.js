import React from "react";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
