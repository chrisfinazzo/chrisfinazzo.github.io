import React, { Component } from "react";
import {
  Link,
  HashRouter
} from 'react-router-dom';
import Header from "./components/header";
import Social from "./components/social";
import Rights from "./components/rights";
 
class Home extends Component {
  render() {
    return (
      <HashRouter>
      <Header />
      <div>
      <p className="not-found">Oops! There seems to be nothing here. Go <Link to="/">back</Link> and try again.</p>
      </div>

<Social />
<Rights />

</HashRouter>
    );
  }
}
 
export default Home;
