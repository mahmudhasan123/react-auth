import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Profile() {
  const { user } = use(AuthContext);

  return <div>{user.email}</div>;
}

export default Profile;
