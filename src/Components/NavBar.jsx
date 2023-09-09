import React from 'react'
import { Link } from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import { useContext } from "react";

function Navbar() {
  const { logged } = useContext(LoginContext);

  return (
    <nav className={`bg-gray-800 text-white p-4 ${logged ? "" : "hidden"}`}>
      <div className="flex space-x-4">
        <div className="relative">
          <Link
            to="/"
            className="bg-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Ofertas
          </Link>
        </div>
        <div className="relative ">
          <Link className="bg-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            boletos vendidos
          </Link>
        </div>
        <div className="relative ">
          <Link to="/settings" className="bg-gray-600 px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            Ajustes
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
