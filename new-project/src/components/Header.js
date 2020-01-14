import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: this.props.name ? this.props.name : "Test"
    };
  }

  render() {
    return <div className="header"></div>;
  }
}

export default Header;
