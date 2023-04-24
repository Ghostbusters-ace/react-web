import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Ui/Layout";
import Create from "../Pages/Create";
import Receipt from "../Pages/Receipt";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/create",
    element: (
      <Layout>
        <Create />
      </Layout>
    ),
  },
  {
    path: "/receipt/:id",
    element: (
      <Layout>
        <Receipt />
      </Layout>
    ),
  },
]);

export default router;
