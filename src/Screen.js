import React, { useContext } from "react";
import { UserContext } from "./context";
import Header from "./Header";

const Screen = ({ user }) => {
  const { logUserIn } = useContext(UserContext);
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>Log User In </button>
    </div>
  );
};

export default Screen;
