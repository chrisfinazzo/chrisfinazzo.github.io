import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';
import Header from "./components/header";
import Form from "./components/form";
import Social from "./components/social";
import Rights from "./components/rights";
 
class Contact extends Component {
  render() {
    return (
    <div>
      <Header />
      <Form />
      <Social />
      <Rights />
    </div>
    );
  }
}
 
export default Contact;
