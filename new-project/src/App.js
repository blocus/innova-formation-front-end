import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Books from "./components/Books.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: this.props.name ? this.props.name : "Test"
    };
  }

  render() {
    return (
      <>
        <div className="App">
          <Header />
          <Books />
        </div>
      </>
    );
  }
}

export default App;
