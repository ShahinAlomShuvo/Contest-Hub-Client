import { Navigate, useLocation } from "react-router-dom";

import { FadeLoader } from "react-spinners";
import useAuth from "../Hook/useAuth";
import useCreator from "../Hook/useCreator";

const CreatorRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isCreator, isPending] = useCreator();

  if (loading || isPending) {
    return (
      <div className='flex justify-center items-center py-40'>
        <FadeLoader color='#36d7b7' />
      </div>
    );
  }

  if (user && isCreator) {
    return children;
  }

  return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default CreatorRouter;
