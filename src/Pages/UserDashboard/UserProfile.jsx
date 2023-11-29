import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import ApexChart from "./ApexChart";
import SectionHeader from "../../Components/Shared/SectionHeader";

const UserProfile = () => {
  const { user } = useAuth();

  const totalAttempts = 10;
  const totalWins = 7;

  return (
    <>
      <SectionHeader title={"My Profile"}></SectionHeader>
      <div className='grid grid-cols-2'>
        <div>
          <div className='max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900'>
            <div className='rounded-t-lg h-32 overflow-hidden'>
              <img
                className='object-cover object-top w-full'
                src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ'
                alt='Mountain'
              />
            </div>
            <div className='mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden'>
              <img
                className='object-cover object-center h-32'
                src={user.photoURL}
              />
            </div>
            <div className='text-center mt-2'>
              <h2 className='font-semibold'>{user.displayName}</h2>
            </div>

            <div className='p-4 border-t mx-8 mt-2'>
              <button className='w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2'>
                <Link to={"/"}>Go Home</Link>
              </button>
            </div>
          </div>
        </div>
        <div className='pt-20 '>
          <ApexChart
            attemptPercentage={totalAttempts - totalWins}
            winningPercentage={totalWins}
          ></ApexChart>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
