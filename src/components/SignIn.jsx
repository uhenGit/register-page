import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addUser, getAllUsers } from "../actions/userAction";

class SignIn extends Component {
  componentDidMount() {
    fetch("https://meowfacts.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => this.setState({ random: data.data[0] }));
  }
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    loyalty: "unavailable",
    cardNumber: undefined,
    show: false,
    redirect: false,
    random: "",
  };
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleForm = (e) => {
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.gender === ""
    ) {
      return this.setState({ show: true });
    }
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      gender: this.state.gender,
      loyalty: this.state.loyalty,
    };
    this.props.addUser({ user });
    this.clearForm();
    this.setState({ redirect: true });
  };
  clearForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      gender: "",
      loyalty: "unavailable",
      cardNumber: undefined,
    });
  };
  closeAlert = () => {
    this.setState({ show: false });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="form_wrap">
        <form onSubmit={this.handleForm}>
          <h2>Fill the form</h2>
          <span className="subheader">all fields required</span>
          <label>
            <span>First Name:</span>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInput}
            />
          </label>
          <label>
            <span>Last Name:</span>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInput}
            />
          </label>
          <div className="radio_block">
            <h3>Select gender:</h3>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onClick={this.handleInput}
              />
              <span>Female</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onClick={this.handleInput}
              />
              <span>Male</span>
            </label>
          </div>
          <h3>Select loyalty program:</h3>
          <select name="loyalty" onChange={this.handleInput}>
            <option value="unavailable" defaultValue>
              Unavailable
            </option>
            <option value="creditCard">Credit card</option>
            <option value="mobileApp">Mobile App</option>
          </select>
          <label
            className={
              this.state.loyalty === "creditCard" ? "optional" : "optional hide"
            }
          >
            <span>Credit card number:</span>
            <input
              type="text"
              name="cardNumber"
              value={this.state.cardNumber}
              onChange={this.handleInput}
            />
          </label>
          <div className="btn_block">
            <button className="btn" type="submit">
              Save
            </button>
            <button className="btn" type="reset" onClick={this.clearForm}>
              Clear Form
            </button>
          </div>
          {this.state.random !== "" ? (
            <p className="random_info">{this.state.random}</p>
          ) : (
            <p>Loading...</p>
          )}
        </form>
        <div className={this.state.show ? "outer show_alert" : "outer"}>
          <div className="inner">
            <h3>All fields require</h3>
            <button className="btn" onClick={this.closeAlert}>
              OK
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { addUser, getAllUsers })(SignIn);
//export default SignIn;
