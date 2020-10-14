import React, { useEffect } from "react";
import UpdateProfile from "../components/UpdateProfile";

export default function UpdateProfilePage(props) {
  useEffect(() => {
    document.title = "Update Profile | Conduit";
  }, []);
  return <UpdateProfile user={props.user} />;
}
