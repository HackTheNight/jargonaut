import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Tip from "./Tip";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/tip/:tipId" component={Tip} />
    </Switch>
  </BrowserRouter>
);

export default Router;
