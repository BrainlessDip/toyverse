import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  const { user, setUser } = use(AuthContext);
  console.log(user);

  return (
    <div>
      <h1>{user?.displayName}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
};

export default Home;
