import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import AuthProvider from "../../contexts/AuthProvider";
import PrivateRoute, { ProtectedRoute } from "../../routes/PrivateRoute";
import AddBlogs from "./adminDashboard/blogs/AddBlogs";
import AddProduct from "./adminDashboard/products/AddProduct";
import SideNav from "./SideNav";

const Admin = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-10">
      <div className="col-span-1 md:py-10 lg:py-0 py-10 z-50">
        <SideNav />
      </div>

      <div className="col-span-4 my-24  px-6 sticky  ">
        <Routes>
          <Route
            path="manage-properties"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="manage-blogs"
            element={
              <ProtectedRoute>
                <AddBlogs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </main>
  );
};

export default Admin;
