import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ManagerHomePage from "../pages/ManagerHome";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccesCheckoutPage from "../pages/SuccessCheckout";
import Layout from "../components/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ManagerHomePage />} />
        <Route path="/manager/sign-in" element={<SignInPage />} />
        <Route path="/manager/sign-up" element={<SignUpPage />} />
        <Route path="/success-checkout" element={<SuccesCheckoutPage />} />
        <Route path="/manager" element={<Layout />}>
          <Route index element={<ManagerHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
