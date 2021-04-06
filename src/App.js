import React, { Component, Lazy, Suspense } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
const Home = React.lazy(() => import("./home"));
const RJP = React.lazy(() => import("./rjp"));
const Contact = React.lazy(() => import("./contact"));
import Header from "./components/header";
import Social from "./components/social";
import Rights from "./components/rights";

class App extends Component {
  render() {
    return (
      <React.Suspense fallback={<p>Loading...</p>}>
      <HashRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/rjp" component={RJP}/>
            <Route path="/contact" component={Contact}/>
      </HashRouter>
      </React.Suspense>
    );
  }
}
 
export default App;
