import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ManagerHomePage from "../pages/ManagerHome";
import SignInPage from "../pages/SignIn";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagerHomePage />} />
        <Route path="/manager/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
