import React from "react";

const Form = () => (
<form name="contact" data-netlify="true" netlify-honeypot="bot-field" method="post" onSubmit="submit" action="/success">
  <input type="hidden" name="form-name" value="contact" />
  <h2 id="contact">Contact Me</h2>
  <div>
    <label for="name">Name:&nbsp;</label>
    <input type="text" id="name" name="user_name" />
  </div>

  <div>
    <label for="mail">E-mail:&nbsp;</label>
    <input type="email" id="mail" name="user_email" />
  </div>

  <div>
    <label for="msg">Message:&nbsp;</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Submit</button>
  </div>
</form>
)

export default Form;
