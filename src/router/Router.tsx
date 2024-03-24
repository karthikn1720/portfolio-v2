import MainLayout from "../layouts/Main/MainLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//   },
// ]);

const Router = () => {
  return (
    <div className="routes-root">
      <MainLayout />
      {/* <RouterProvider router={router}></RouterProvider> */}
    </div>
  );
};

export default Router;
