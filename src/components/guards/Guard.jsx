import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Guard = ({ pathname }) => {
  const auth = useSelector((state) => state.auth);
  const { isLoggedIn } = auth;

  if (!isLoggedIn) {
    return <Navigate to={pathname} />;
  }

  return <Outlet />;
};

export default Guard;
