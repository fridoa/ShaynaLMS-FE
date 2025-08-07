import { Outlet, useMatch } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ isAdmin = true }) {
  const isManagerPreviewPage = useMatch("/manager/courses/:id/preview");
  const isStudentPreviewPage = useMatch("/student/courses/:id");

  return (
    <>
      {isManagerPreviewPage !== null || isStudentPreviewPage !== null ? (
        <Outlet />
      ) : (
        <div className="flex min-h-screen">
          <Sidebar isAdmin={isAdmin} />
          <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <Header />
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}
