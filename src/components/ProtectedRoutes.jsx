import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ user }) {
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
}

export default ProtectedRoutes;
