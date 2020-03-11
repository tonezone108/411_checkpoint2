import { combineReducers } from "redux";

const biz = (state = null) => state;
const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.value;
    case "LOGOUT":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ biz, user });
