import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FacilityList from "../pages/FacilityList";

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
    ],
  },
]);
export default router;
