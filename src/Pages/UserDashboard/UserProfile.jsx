import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import ApexChart from "./ApexChart";
import SectionHeader from "../../Components/Shared/SectionHeader";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useForm } from "react-hook-form";
import { imgUpload } from "../../Utility/utility";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { updateUser } = useAuth();

  const { data: countUserInfo = [] } = useQuery({
    queryKey: ["countUserInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/contest/submission-info/${user.email}`
      );

      return res.data;
    },
  });

  const totalAttempts = countUserInfo.attemptCount;
  const totalWins = countUserInfo.winningCount;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // upload img
      const imgData = await imgUpload(data.image[0]);

      // update user profile
      const res = await updateUser(data.name, imgData);
      console.log(res);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${err.message}`,
      });
      console.log(err.message);
    }
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className='form-control w-full max-w-xs'>
                  <div className='label'>
                    <span className='label-text'>Your Name</span>
                  </div>
                  <input
                    {...register("name")}
                    type='text'
                    placeholder='Name'
                    className='input input-bordered w-full max-w-xs'
                  />
                </label>
                <label className='form-control w-full max-w-xs'>
                  <div className='label'>
                    <span className='label-text'>Upload Profile Picture</span>
                  </div>
                  <input
                    {...register("image")}
                    type='file'
                    className='file-input file-input-bordered w-full max-w-xs'
                  />
                </label>
                <button className='w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 mt-3'>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='pt-20 '>
          <ApexChart
            loses={totalAttempts - totalWins}
            win={totalWins}
          ></ApexChart>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
