import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Imagebb from "../Pages/Imagebb";
import Cart from "../Pages/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import UserProfile from "../Pages/UserProfile/UserProfile";
import AllUsers from "../Pages/AdminPages/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/AdminPages/AllUsers/AddItems";


export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order",
        element: <Order></Order>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      // Admin Routes
      {
        path: "all-users",
        element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path: "add-item",
        element: <AdminRoutes><AddItems></AddItems> </AdminRoutes>
      },
    ],
  },
]);
