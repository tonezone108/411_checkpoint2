import React, { props } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const HandleLogin = props => {
  console.log(props);
  if (!props.user.username) {
    return <Link to="/login">"Login"</Link>;
  } else {
    return <Button>Logout</Button>;
    // return <Button onClick={props.logoutUser(this.state)}>Logout</Button>;
  }
};

export default HandleLogin;
