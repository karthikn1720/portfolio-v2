import MainLayout from "../layouts/Main/MainLayout";
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
