import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import AdminDashboard from "../pages/AdminDashboard";

const PrivateRoute = () => {
  const isAuthenticated = useAppSelector((state: RootState) => state.auth.user);
  return isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" />;
};

export default PrivateRoute;
