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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
