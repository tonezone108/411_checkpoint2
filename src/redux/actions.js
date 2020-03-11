const loginUser = User => {
  return {
    type: "LOGIN",
    value: User
  };
};

const logoutUser = User => {
  return {
    type: "LOGOUT",
    value: User
  };
};

export { loginUser, logoutUser };
