import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Work from './components/Works/Works.jsx'
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from './components/Testimonials/Testimonial.jsx'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      <Work />
      <Portfolio/>
      <Testimonial />
    </div>
  );
}

export default App;
