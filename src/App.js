import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/works' component={Works} />
      <Route path='/contact' component={Contact} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
