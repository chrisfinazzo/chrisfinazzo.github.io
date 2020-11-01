import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  Link,
  NavLink,
  HashRouter
} from 'react-router-dom';
import me from './me.jpeg';
 
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

<ul id="social">
<li><a href="https://github.com/chrisfinazzo"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
<li><a href="https://www.linkedin.com/in/chrisfinazzo"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
<li><a href="https://twitter.com/chrisfinazzo"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
</ul>

<p id="rights">&copy; 2020 Chris Finazzo</p>
</HashRouter>
    );
  }
}
 
export default About;
