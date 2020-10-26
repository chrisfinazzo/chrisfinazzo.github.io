import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import About from "./about";
import RJP from "./rjp";
import Contact from "./contact";

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
