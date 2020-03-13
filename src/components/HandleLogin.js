import React, { props } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const defaultUser = {
  username: false,
  password: false
};

const HandleLogin = props => {
  console.log(props);
  if (!props.user.username) {
    return <Link to="/login">"Login"</Link>;
  } else {
    return (
      <Button onClick={() => props.logoutUser(defaultUser)}>Logout</Button>
    );
  }
};

export default HandleLogin;
