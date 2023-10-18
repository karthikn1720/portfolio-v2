import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/Main/MainLayout";
import Hello from "../pages/Hello/Hello";
import Loading from "components/Loading/Loading";

const Router = () => {
  return (
    <div className="routes-root">
      <Loading />
      <MainLayout />
    </div>
  );
};

export default Router;
