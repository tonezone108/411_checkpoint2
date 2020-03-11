import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HandleLogin from "./container/HandleLogin";

import { Button, AppBar, Toolbar, TextField } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <AppBar style={{ background: "green" }} position="staic">
              <Toolbar>This is the bar</Toolbar>
              <HandleLogin />
            </AppBar>

            <Router />
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
