import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Checkout from "./components/Checkout/Checkout";
import Inventory from "./components/Inventory/Inventory";
import Home from "./components/Layout/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import AuthProvider from "./components/providers/AuthProvider";
import Shop from "./components/Shop/Shop";
import SignUp from "./components/SignUp/SignUp";
import "./index.css";
import cartProductsLoader from "./Loaders/cartProductsLoader";
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
