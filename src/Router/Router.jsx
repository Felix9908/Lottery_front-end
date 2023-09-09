import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LandingPage from "../Pages/LandingPage";
import CreateAcount from "../Pages/CreateAcount";
import BoletLot from "../Pages/BoletLot";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import ProtectedRoutes from "./ProtectedRoutes";
import Login from '../Pages/Login'
import Settings from '../Pages/Settings'
import React from "react";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/"element={<Login/>}/>
          <Route
            path="/landingPage"
            element={
              <ProtectedRoutes>
                <LandingPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/createAcount"
            element={
              <ProtectedRoutes>
                <CreateAcount />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/boletLot"
            element={
              <ProtectedRoutes>
                <BoletLot />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoutes>
                <Settings />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
