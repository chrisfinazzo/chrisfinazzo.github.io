import React, { Component } from "react";
import { Link } from 'react-router-dom';
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <p class="intro">If you have a message to communicate, I can help you do that. Currently working as a Page at <a href="https://chathamlibrary.org">The Library of The Chathams</a>, I have an MA in Communications and am actively seeking a role which will allow me to leverage my unique mix of communications and technology skills. Take a look at my <Link to="/rjp">Reverse Job Posting</Link> to see how I can help you. I look forward to working <Link to="/contact">together</Link>.<br /><br />When I'm not working, I sometimes write things on my <a href="https://chrisfinazzo.com">blog</a>.</p>
      </div>
    );
  }
}
 
export default About;
