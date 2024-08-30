import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../layout/MainLayOut";
import App from "../App";
import Login from "../pages/Login";

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
    ],
  },
]);
export default router;
