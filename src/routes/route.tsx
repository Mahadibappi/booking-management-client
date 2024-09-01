import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FacilityList from "../pages/FacilityList";
import FacilityDetail from "../pages/FacilityDetail";
import Booking from "../pages/Booking";
import Payment from "../pages/Payment";
import About from "../components/About";
import Contact from "../components/Contact";
import UserDashboard from "../pages/UserDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import CreateFacility from "../pages/CreateFacility";
import AllBooking from "../pages/AllBooking";
import CreateAdmin from "../pages/CreateAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/facility",
        element: <FacilityList />,
      },
      {
        path: "/facility/:id",
        element: <FacilityDetail />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/user",
        element: <UserDashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
        children: [
          {
            path: "create-facility",
            element: <CreateFacility />,
          },
          {
            path: "all-booking",
            element: <AllBooking />,
          },
          {
            path: "create-admin",
            element: <CreateAdmin />,
          },
        ],
      },
    ],
  },
]);

export default router;
