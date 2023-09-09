import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { LoginProvider } from "./Context/LoginContext";
import { DataProvider } from "./Context/DataContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </DataProvider>
  </React.StrictMode>
);
