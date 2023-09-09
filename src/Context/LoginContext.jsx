import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  var token = sessionStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `bearer ${token}`;
  }

  const login = async ({ username, password }) => {
    try {
      await axios
        .post("http://localhost:4000/login", { username, password })
        .then((res) => {
          console.log(res.data.userData[0]);
          if (res.data.msg == "AUTEMTICACION EXITOSA") {
            setLogged(true);
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("priv", res.data.userData[0].priv);
          } else {
            console.log("error");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await axios.put("http://localhost:4000/logout").then((res) => {
        if (res.data.msg == "Has sido desconectado") {
          setLogged(false);
          sessionStorage.removeItem("token")
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLogged(true);
    }
  }, [login]);

  return (
    <LoginContext.Provider
      value={{
        login,
        logged,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
