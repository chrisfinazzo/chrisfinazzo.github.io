import React, { Component } from "react";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <form action="https://formspree.io/chris@chrisfinazzo.com" method="POST">
  <h2 id="contact">Contact Me</h2>
  <label for="fname">First Name</label><input type="text" class="field" name="firstname" placeholder="John" />
<label for="lname">Last Name</label><input type="text" class="field" name="lastname" placeholder="Smith" />
<label for="email">Email</label><input type="text" class="field" name="_replyto" placeholder="john.smith@example.com" /><label for="message">Message</label>
    <textarea class="field" name="message" placeholder=""></textarea>
<input type="submit" name="submit" value="Submit" />
</form>
      </div>
    );
  }
}
 
export default Contact;
