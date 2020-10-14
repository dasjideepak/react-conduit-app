import React, { useEffect } from "react";
import Signup from "../components/SignUp";
import PropTypes from "prop-types";

export default function SignupPage(props) {
  useEffect(() => {
    document.title = "Signup | Conduit";
  }, []);
  return (
    <>
      <Signup
        setNotification={props.setNotification}
        notifications={props.notifications}
        setIsLogged={props.setIsLogged}
      />
    </>
  );
}

SignupPage.propTypes = {
  setNotification: PropTypes.func,
  notifications: PropTypes.array,
};
