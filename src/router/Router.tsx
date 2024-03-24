import ContactMe from "pages/ContactMe/ContactMe";
import MainLayout from "../layouts/Main/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

const Router = () => {
  return (
    <div className="routes-root">
      {/* <MainLayout /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Router;
