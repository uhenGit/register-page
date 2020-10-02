import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li className="btn">
              <Link to="/">Home</Link>
            </li>
            <li className="btn">
              <Link to="/signin">Register</Link>
            </li>
            <li className="btn">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
