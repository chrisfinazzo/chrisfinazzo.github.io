import React from "react";

const Form = () => (
<form action="https://formspree.io/f/xgerekvv" method="POST">
  <h2 id="contact">Contact Me</h2>
  <label htmlFor="fname">First Name</label><input type="text" className="field" name="firstname" placeholder="John" />
<label htmlFor="lname">Last Name</label><input type="text" className="field" name="lastname" placeholder="Smith" />
<label htmlFor="email">Email</label><input type="text" className="field" name="_replyto" placeholder="john.smith@example.com" /><label htmlFor="message">Message</label>
    <textarea className="field" name="message" placeholder=""></textarea>
<input type="submit" name="submit" value="Submit" />
</form>
)

export default Form;
