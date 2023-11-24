import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import errorAnimation from "../../assets/AnimationFile/error.json";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className='flex flex-col justify-center items-center h-screen text-center bg-[#B8E0EB] bg-opacity-20'>
      <div className='w-full'>
        <Lottie
          className='max-w-full h-96'
          animationData={errorAnimation}
          loop={true}
        />
      </div>
      <div id='error-page'>
        <h1 className='text-xl text-red-600 font-semibold'>Oops!</h1>
        <p className='text-xl '>Sorry, an unexpected error has occurred.</p>
        <p className='text-bold text-2xl'>
          <i>
            {error.status} {error.statusText || error.message}
          </i>
        </p>
        <Link to={"/"}>
          <button className='btn btn-info mt-2'>Go Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
