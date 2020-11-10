import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import About from "./about";
import RJP from "./rjp";
import Contact from "./contact";
import Header from "./components/header";
import Social from "./components/social";
import Rights from "./components/rights";

class App extends Component {
  render() {
    return (
      <HashRouter>
            <Route exact path="/" component={About}/>
            <Route path="/rjp" component={RJP}/>
            <Route path="/contact" component={Contact}/>
      </HashRouter>
    );
  }
}
 
export default App;
