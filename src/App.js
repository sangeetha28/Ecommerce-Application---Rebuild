import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route } from "react-router-dom";
import { history } from "./Redux/store";
import HomePage from "./pages/homePage";
import Register from "./pages/registerPage";

// only for named exports
//<Route path="/" component={HomePage} />
//<ConnectedRouter history={history}>
//</ConnectedRouter>

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);
