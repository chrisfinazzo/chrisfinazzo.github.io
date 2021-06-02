import React from "react";

const Form = () => (
<form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="post" onSubmit="submit" action="/success">
  <input type="hidden" name="form-name" value="contact" />
  <h2 id="contact">Contact Me</h2>
  <div>
    <label htmlFor="first-name">First Name:<br />
      <input type="text" id="first-name" name="first-name" placeholder="John" required />
    </label>
  </div>
  
  <div>
    <label htmlFor="last-name">Last Name:<br />
      <input type="text" id="last-name" name="last-name" placeholder="Smith" required />
    </label>
  </div>
  
  <div>
    <label htmlFor="email">Email:<br />
      <input type="email" id="email" name="email" placeholder="john.smith@example.com" required />
    </label>
  </div>
  
  <div>
    <label htmlFor="message">Message:<br />
      <textarea id="message" name="message" rows="7" required></textarea>
    </label>
  </div>
  
  <div>
    <button type="submit">Submit</button>
  </div>
  
  <div class="hidden">
    <label>No robots allowed!<input name="bot-field" /></label>
  </div>

</form>
)

export default Form;
