import Navbar from "./components/Navbar";
import Home from "./components/Home";
import React, { useEffect } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {


  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      // prevent the right-click menu from appearing
      e.preventDefault()
    }

    // attach the event listener to 
    // the document object
    document.addEventListener("contextmenu", handleContextMenu)

    // clean up the event listener when 
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  // ...
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
