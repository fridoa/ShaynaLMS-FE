import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ManagerHomePage from "../pages/ManagerHome";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagerHomePage />} />
        <Route path="/manager/sign-in" element={<SignInPage />} />
        <Route path="/manager/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
