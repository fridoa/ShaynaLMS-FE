import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ManagerHomePage from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccesCheckoutPage from "../pages/SuccessCheckout";
import Layout from "../components/Layout";
import CoursePage from "../pages/manager/course";
import CreateCoursePage from "../pages/manager/create-courses";
import DetailCourse from "../pages/manager/course-detail";
import ContentCreatePage from "../pages/manager/course-content-create/ContentCreatePage";
import PreviewCoursePage from "../pages/manager/course-preview/PreviewCoursePage";
import ManageStudentPage from "../pages/manager/students/ManageStudentPage";

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
          <Route path="/manager/courses" element={<CoursePage />} />
          <Route path="/manager/courses/create" element={<CreateCoursePage />} />
          <Route path="/manager/courses/:id" element={<DetailCourse />} />
          <Route path="/manager/courses/:id/create" element={<ContentCreatePage />} />
          <Route path="/manager/courses/:id/preview" element={<PreviewCoursePage />} />
          <Route path="/manager/students" element={<ManageStudentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
