import { GET_ALL_USERS, CREATE_NEW_USER, IN_PROCESS } from "../actions/types";

const initialState = {
  loading: false,
  users: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case IN_PROCESS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CREATE_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    default:
      return state;
  }
};
