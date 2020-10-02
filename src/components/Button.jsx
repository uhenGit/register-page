import React, { Component } from "react";
import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    return (
      <Link to={this.props.data.path}>
        <button className={this.props.data.class}>
          {this.props.data.content}
        </button>
      </Link>
    );
  }
}
export default Button;
