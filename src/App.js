import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Image from "./components/homepageimage";


// only for named exports

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Navigation />
        <Image />
      </div>
    );
  }
}

export default hot(module)(App);
