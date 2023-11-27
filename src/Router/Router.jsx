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
import ContestDetails from "../Pages/AllContest/ContestDetails";
import Payment from "../Pages/Payment/Payment";
import MyCreateContest from "../Pages/CreatorDashboard/MyCreateContest";

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
      },
      {
        path: "/allContest/:id",
        element: <ContestDetails></ContestDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/contest/${params.id}`),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/payment/:id",
        element: <Payment></Payment>,
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
    // creator route
    children: [
      {
        path: "/dashboard/addContest",
        element: <AddContest></AddContest>,
      },
      {
        path: "/dashboard/myCreatedContest",
        element: <MyCreateContest></MyCreateContest>,
      },
    ],
  },
]);

export default router;
