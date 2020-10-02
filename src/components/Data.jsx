import React, { Component } from "react";
import store from "../store";

class Data extends Component {
  render() {
    const usersArr = store.getState().users.users;
    //console.log(store.getState());
    const users = usersArr.map((user, index) => {
      return (
        <tbody key={index} className="user_wrap">
          <tr className="user_info">
            <td className="user_header">First Name: </td>
            <td className="user_data">{user.firstName}</td>
          </tr>
          <tr className="user_info">
            <td className="user_header">Last Name: </td>
            <td className="user_data">{user.lastName}</td>
          </tr>
          <tr className="user_info">
            <td className="user_header">Gender: </td>
            <td className="user_data">{user.gender}</td>
          </tr>
          <tr className="user_info">
            <td className="user_header">Loyalty Program: </td>
            <td className="user_data">{user.loyalty.toUpperCase()}</td>
          </tr>
        </tbody>
      );
    });
    return (
      <div className="container">
        <h2>Registered Users:</h2>
        <table className="wrap">{users}</table>
      </div>
    );
  }
}

export default Data;
