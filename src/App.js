import Navbar from "./components/Navbar/Navbar";

import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  return (
    <div className="App">
      
      <Navbar />
     
    </div>
  );
}

export default App;
