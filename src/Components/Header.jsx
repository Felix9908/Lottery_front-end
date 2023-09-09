import { useState, useContext } from "react";
import LoginContext from "../Context/LoginContext";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { logged, logout } = useContext(LoginContext);

  return (
    <header className={`bg-blue-500 p-4 ${logged ? "" : "hidden"}`}>
      <div className="flex items-center justify-between">
        <div className="text-white text-3xl font-bold">Online lottery</div>
      </div>
      <button onClick={()=>logout()} className="">
        Logout
      </button>
    </header>
  );
}

export default Header;
