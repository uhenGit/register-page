import { GET_ALL_USERS, CREATE_NEW_USER, IN_PROCESS } from "./types";

export const getAllUsers = () => (dispatch) => {
  fetch("./db.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log("data from action: ", data);
      dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
    })
    .catch((err) => {
      console.log("action error: ", err);
    });
};
export const addUser = ({ user }) => (dispatch) => {
  dispatch({
    type: CREATE_NEW_USER,
    user,
  });
};
