import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';
import Header from "./components/header";
import Social from "./components/social";
import Rights from "./components/rights";
 
class Success extends Component {
  render() {
    return (
    <div>
      <Header />
      <p>Thanks for your submission!</p>
      <Social />
      <Rights />
    </div>
    );
  }
}
 
export default Sucess;
