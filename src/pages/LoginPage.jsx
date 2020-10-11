import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";

export default function SignupPage(props) {
  useEffect(() => {
    document.title = "Login | Conduit";
  }, []);

  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}
