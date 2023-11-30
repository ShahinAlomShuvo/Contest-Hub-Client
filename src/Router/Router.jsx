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
import UpdateContest from "../Pages/CreatorDashboard/updateContest";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";
import ManageContest from "../Pages/AdminDashboard/ManageContest";
import ParticipateContest from "../Pages/UserDashboard/ParticipateContest";
import UserProfile from "../Pages/UserDashboard/UserProfile";
import WinningContest from "../Pages/UserDashboard/WinningContest";
import SeeSubmission from "../Pages/CreatorDashboard/SeeSubmission";
import Pricing from "../Pages/Pricing/Pricing";
import HowToSelect from "../Pages/HowToSelect/HowToSelect";
import LeaderBoard from "../Pages/LeaderBoard/LeaderBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allContest",
        element: <AllContest></AllContest>,
      },
      {
        path: "/allContest/:id",
        element: (
          <PrivateRoute>
            <ContestDetails></ContestDetails>
          </PrivateRoute>
        ),
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
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/leader-board",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "/process",
        element: <HowToSelect></HowToSelect>,
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
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
      // admin route
      {
        path: "/dashboard/manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/manageContest",
        element: <ManageContest></ManageContest>,
      },
      // creator route
      {
        path: "/dashboard/addContest",
        element: <AddContest></AddContest>,
      },
      {
        path: "/dashboard/myCreatedContest",
        element: <MyCreateContest></MyCreateContest>,
      },
      {
        path: "/dashboard/seeSubmission/:id",
        element: <SeeSubmission></SeeSubmission>,
      },
      {
        path: "/dashboard/updateContest/:id",
        element: <UpdateContest></UpdateContest>,
      },
      // user route
      {
        path: "/dashboard/participatedContest",
        element: <ParticipateContest></ParticipateContest>,
      },
      {
        path: "/dashboard/winningContest",
        element: <WinningContest></WinningContest>,
      },
      {
        path: "/dashboard/userProfile",
        element: <UserProfile></UserProfile>,
      },
    ],
  },
]);

export default router;
