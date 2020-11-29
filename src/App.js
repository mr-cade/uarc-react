import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import home from "./pages/home"
import about from "./pages/about"
import atv from "./pages/atv"
import benefits from "./pages/benefits"
import books from "./pages/books"
import elmers from "./pages/elmers"
import irlp from "./pages/irlp"
import join from "./pages/join"
import lending from "./pages/lending"
import meeting from "./pages/meeting"
import repeaters from "./pages/repeaters"

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Route exact path="/" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/atv" component={atv} />
        <Route exact path="/benefits" component={benefits} />  
        <Route exact path="/books" component={books} />
        <Route exact path="/elmers" component={elmers} />
        <Route exact path="/irlp" component={irlp} />
        <Route exact path="/join" component={join} />
        <Route exact path="/lending" component={lending} />
        <Route exact path="/meeting" component={meeting} />
        <Route exact path="/repeaters" component={repeaters} />

      <Footer/>
      </Router>
    </div>
  );
}

export default App;
