import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import AddProduct from "./Pages/AddProduct/AddProduct.jsx";
import MyProducts from "./Pages/MyProducts/MyProducts.jsx";
import Products from "./Pages/Products/Products.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import AuthProvider from "./Components/Auth/AuthProvider.jsx";
import UserDashboard from "./Components/Layout/UserDashboard/UserDashboard.jsx";
import MyProfile from "./Pages/MyProfile/MyProfile.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products",
        element: <Products/>
      },
    ],
  },
  {
    path: "/UserDashboard",
    element: <UserDashboard/>,
    children: [
      {
        path: "/UserDashboard/MyProfile",
        element: <MyProfile/>
      },
      {
        path: "/UserDashboard/AddProduct",
        element: <AddProduct/>
      },
      {
        path: "/UserDashboard/MyProducts",
        element: <MyProducts/>
      },
      
    ],
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Register',
    element: <Register />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);