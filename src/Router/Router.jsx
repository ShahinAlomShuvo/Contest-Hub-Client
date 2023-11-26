import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/SignUp/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AddContest from "../Pages/CreatorDashboard/AddContest";
import AllContest from "../Pages/AllContest/AllContest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/allContest",
        element: <AllContest></AllContest>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/creator/addContest",
        element: <AddContest></AddContest>,
      },
    ],
  },
]);

export default router;
