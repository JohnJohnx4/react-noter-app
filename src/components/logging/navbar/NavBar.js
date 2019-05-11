import React, { Component } from "react";
import ApplicationBar from "./ApplicationBar";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <ApplicationBar history={this.props.history}/>
      </div>
    );
  }
}

export default NavBar;
