import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Navigation from "./components/Navigation";
import Detail from "./routes/Details";
import "./css/App.css";  

function App() {
  return (
    <HashRouter> 
      <Navigation/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/> 
    </HashRouter>
  ); 
}

export default App; 