import React from "react";

const Form = () => (
<form name="contact" method="post" data-netlify="true" onSubmit="submit">
  <input type="hidden" name="form-name" value="contact" />
  
  <div>
    <label htmlFor="first-name">First Name:<br />
      <input type="text" id="first-name" name="first-name" required />
    </label>
  </div>
  
  <div>
    <label htmlFor="last-name">Last Name:<br />
      <input type="text" id="last-name" name="last-name" required />
    </label>
  </div>
  
  <div>
    <label htmlFor="email">Email:<br />
      <input type="email" id="email" name="email" required />
    </label>
  </div>
  
  <div>
    <label htmlFor="message">Message:<br />
      <textarea id="message" name="message" required></textarea>
    </label>
  </div>
  
  <div>
    <button type="submit">Submit</button>
  </div>

</form>
)

export default Form;
