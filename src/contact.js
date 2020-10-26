import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
 
class Contact extends Component {
  render() {
    return (
      <div>
        <form action="https://formspree.io/chris@chrisfinazzo.com" method="POST">
  <h2 id="contact">Contact Me</h2>
  <label htmlFor="fname">First Name</label><input type="text" className="field" name="firstname" placeholder="John" />
<label htmlFor="lname">Last Name</label><input type="text" className="field" name="lastname" placeholder="Smith" />
<label htmlFor="email">Email</label><input type="text" className="field" name="_replyto" placeholder="john.smith@example.com" /><label for="message">Message</label>
    <textarea className="field" name="message" placeholder=""></textarea>
<input type="submit" name="submit" value="Submit" />
</form>

<div id="social">
<FontAwesomeIcon icon={faGithub} size="2x" />
<FontAwesomeIcon icon={faLinkedin} size="2x" />
<FontAwesomeIcon icon={faTwitter} size="2x" />
</div>

<p id="rights">&copy; 2020 Chris Finazzo</p>
    </div>
    );
  }
}
 
export default Contact;
