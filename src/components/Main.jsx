import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Data from "./Data";
import SignIn from "./SignIn";
import About from "./About";

import { getAllUsers } from "../actions/userAction";

class Main extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Data} />
          <Route path="/signin" component={SignIn} />
          <Route path="/about" component={About} />
        </Switch>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users.users,
});
export default connect(mapStateToProps, { getAllUsers })(Main);
