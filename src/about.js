import React, { Component } from "react";
import {
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';
import me from './me.jpeg';
import Social from "./components/social";
import Rights from "./components/rights";
 
class About extends Component {
  render() {
    return (
      <HashRouter>
      <div id="nameplate">
      <h2>Chris Finazzo</h2>
      <p>One part writer, one part technologist</p>
      </div>
      <div className="content">
      <img src={me} alt="me" />
      <p className="intro">If you have a message to communicate, I can help you do that. Currently working as a Page at <a href="https://chathamlibrary.org">The Library of The Chathams</a>, I have an MA in Communications and am actively seeking a role which will allow me to leverage my unique mix of communications and technology skills. Take a look at my <NavLink to="/rjp">Reverse Job Posting</NavLink> to see how I can help you. I look forward to working <NavLink to="/contact">together</NavLink>.<br /><br />When I'm not working, I sometimes write things on my <a href="https://chrisfinazzo.com">blog</a>.</p>
      </div>

<Social />
<Rights />

</HashRouter>
    );
  }
}
 
export default About;
