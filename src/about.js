import React, { Component } from "react";
import {
  NavLink,
  HashRouter
} from 'react-router-dom';
 
class About extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <p className="intro">If you have a message to communicate, I can help you do that. Currently working as a Page at <a href="https://chathamlibrary.org">The Library of The Chathams</a>, I have an MA in Communications and am actively seeking a role which will allow me to leverage my unique mix of communications and technology skills. Take a look at my <NavLink to="/rjp">Reverse Job Posting</NavLink> to see how I can help you. I look forward to working <NavLink to="/contact">together</NavLink>.<br /><br />When I'm not working, I sometimes write things on my <a href="https://chrisfinazzo.com">blog</a>.</p>
      </div>
    </HashRouter>
    );
  }
}
 
export default About;
