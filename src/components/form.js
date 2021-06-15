import React from "react";

const Form = () => (
<React.Fragment>
<h2>Contact Me</h2>
<form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="POST" onSubmit="submit" action="/success">
  <input type="hidden" name="form-name" value="contact" />
  <label for="firstName" className="first-name">First Name</label>
  <input id="firstName" name="firstName" type="text" required />

  <label for="lastName" className="last-name">Last Name</label>
  <input id="lastName" name="lastName" type="text" required />

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />
  
  <label for="message">Message</label>
  <textarea id="msg" name="message" required></textarea>

  <label><input name="bot-field" hidden /></label>

  <button type="submit">Submit</button>
  
</form>
</React.Fragment>
)

export default Form;
