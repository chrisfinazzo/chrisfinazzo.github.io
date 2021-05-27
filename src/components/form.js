import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xgerekvv");
  if (state.succeeded) {
      return <p style="text-align: center">Thanks for the feedback!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="contact">Contact Me</h2>
      <label htmlFor="fname">First Name:</label>
      <input type="text" className="field" name="firstname" placeholder="John" required />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <label htmlFor="lname">Last Name:</label>
      <input type="text" className="field" name="lastname" placeholder="Smith" required />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <label htmlFor="email">Email Address:</label>
      <input type="email" className="field" name="email" placeholder="john.smith@example.com" required />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <label htmlFor="message">Message:</label>
      <textarea className="field" name="message" placeholder="" required></textarea>
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  )
}

function App() {
  return (
    <Form />
  );
}
export default Form;


