import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminGuard = ({ pathname }) => {
  const admin = useSelector((state) => state.admin);
  const { isLoggedIn } = admin;

  if (!isLoggedIn) {
    return <Navigate to={pathname} />;
  }

  return <Outlet />;
};

export default AdminGuard;
