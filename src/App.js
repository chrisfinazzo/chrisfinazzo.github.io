import React, { Component, lazy, Suspense } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
const Home = React.lazy(() => import("./home"));
const RJP = React.lazy(() => import("./rjp"));
const Contact = React.lazy(() => import("./contact"));

const renderLoader = () => <p>Loading...</p>;

import Header from "./components/header";
import Social from "./components/social";
import Rights from "./components/rights";

class App extends Component {
  render() {
    return (
      <Suspense fallback={renderLoader()}>
      <HashRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/rjp" component={RJP}/>
            <Route path="/contact" component={Contact}/>
      </HashRouter>
      </Suspense>
    );
  }
}
 
export default App;
