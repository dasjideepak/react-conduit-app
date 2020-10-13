import React, { useEffect } from "react";
import Login from "../components/Login";
import PropTypes from "prop-types";

export default function SignupPage(props) {
  useEffect(() => {
    document.title = "Login | Conduit";
  }, []);

  return (
    <>
      <Login
        setIsLogged={props.setIsLogged}
        setNotification={props.setNotification}
        notifications={props.notifications}
        setUser={props.setUser}
      />
    </>
  );
}

Login.propTypes = {
  setIsLogged: PropTypes.func,
  setNotification: PropTypes.func,
  notifications: PropTypes.array,
  setUser: PropTypes.func,
};
