import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className='flex justify-center items-center py-40'>
        <FadeLoader color='#36d7b7' />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to={"/signin"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
