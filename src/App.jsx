import React from "react";
import { Route, Routes, Navigate } from "react-router";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Categories from "./Pages/Categories/Categories";
import Products from "./Pages/Products/Products";
import Layout from "./Pages/Layout";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import { getToken } from "./store/api";

const App = () => {
  const token = getToken();

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Route>

      <Route
        path="/signin"
        element={token ? <Navigate to="/" replace /> : <SignIn />}
      />
      <Route
        path="/signup"
        element={token ? <Navigate to="/" replace /> : <SignUp />}
      />

      <Route
        path="*"
        element={<Navigate to={token ? "/" : "/signin"} replace />}
      />
    </Routes>
  );
};

export default App;
