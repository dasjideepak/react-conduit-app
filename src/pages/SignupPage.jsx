import React, { useEffect } from "react";
import Signup from "../components/SignUp";

export default function SignupPage(props) {
  useEffect(() => {
    document.title = "Signup | Conduit";
  }, []);
  return (
    <>
      <Signup />
    </>
  );
}
