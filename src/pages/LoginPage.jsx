import React, { useEffect } from "react";
import Login from "../components/Login";

export default function SignupPage(props) {
  useEffect(() => {
    document.title = "Login | Conduit";
  }, []);

  return (
    <>
      <Login setIsLogged={props.setIsLogged} />
    </>
  );
}
