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
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background: darkMode? 'black':'',
        color:darkMode? 'white': '',
      }}
      >
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      <Work />
      <Portfolio/>
      <Testimonial />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
