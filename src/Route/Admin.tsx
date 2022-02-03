import { Route } from "react-router-dom";

import { lazy } from "react";

import Loadable from "../components/Loadable";

const Dashboard = Loadable(lazy(() => import("../pages/DashBoard")));
const AddNewProduct = Loadable(lazy(() => import("../pages/NewProduct")));

export const adminRoutes = (rule: boolean) => {
  // const role = Boolean(localStorage.getItem("role"));
  return (
    <>
      {rule && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/addProduct" element={<AddNewProduct />} />

          <Route path="/updateroduct/:id" element={<AddNewProduct />} />
        </>
      )}
    </>
  );
};
