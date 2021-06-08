import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';
import Header from "./components/header";
import Social from "./components/social";
import Rights from "./components/rights";
import Thanks from "./components/thanks";
 
class Success extends Component {
  render() {
    return (
    <div>
      <Header />
      <Thanks />
      <Social />
      <Rights />
    </div>
    );
  }
}
 
export default Success;
