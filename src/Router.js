import React from "react";
import { Switch, Route } from "react-router";
import Dashboard from "./container/Dashboard";
// Write component imports here //

// Start Router function here //

const Router = () => {
  return (
    <Switch>
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
    </Switch>
  );
};

export default Router;
