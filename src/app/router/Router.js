import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../app";
import DemoPage from "../components/gov-uk/demo-page";

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/*<Route exact path="/" component={App} />*/}
      <Route exact path="/" component={DemoPage} />
      <Route path="/tip/:tipId" component={App} />
      <Route path="/demo" component={DemoPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
