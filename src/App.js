import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import me from './me.jpeg';
import About from "./about";
import RJP from "./rjp";
import Contact from "./contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Chris Finazzo</h1>
          <p>One part writer, one part technologist</p>
          <img src={me} alt="me" />
          <ul className="header">
            <li><NavLink exact to="/">About</NavLink></li>
            <li><NavLink to="/rjp">Reverse Job Posting</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={About}/>
            <Route path="/rjp" component={RJP}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
