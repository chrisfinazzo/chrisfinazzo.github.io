import React, { Component, lazy, Suspense } from "react";
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
const Home = React.lazy(() => import("./home"));
const RJP = React.lazy(() => import("./rjp"));
const Contact = React.lazy(() => import("./contact"));
const Success = React.lazy(() => import("./success"));
const NotFound = React.lazy(() => import("./404"));

const renderLoader = () => <p>Loading...</p>;

import Header from "./components/header";
import Social from "./components/social";
import Rights from "./components/rights";
import Thanks from "./components/thanks";

class App extends Component {
  render() {
    return (
      <Suspense fallback={renderLoader()}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/rjp" component={RJP}/>
            <Route exact path="/contact" component={Contact}/>
            <Route component={Success}/>
            <Route component={NotFound}/>
          </Switch>
        </HashRouter>
      </Suspense>
    );
  }
}
 
export default App;
