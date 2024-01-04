import { useForm } from "react-hook-form";
import { imgUpload } from "../../Utility/utility";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import { Helmet } from "react-helmet";
const AddContest = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const SubmitHandler = async (data) => {
    const {
      image: img,
      banner: bannerImg,
      entryFee: fee,
      prizeMoney: prize,
      ...restData
    } = data;

    // upload img
    const image = await imgUpload(img[0]);
    const banner = await imgUpload(bannerImg[0]);

    const entryFee = parseFloat(fee);
    const prizeMoney = parseFloat(prize);

    const contest = {
      image,
      banner,
      entryFee,
      creatorEmail: user.email,
      prizeMoney,
      attempt_count: 0,
      status: "pending",
      ...restData,
    };

    const res = await axiosSecure.post("/contest", contest);
    if (res.status === 200) {
      reset();
      Swal.fire({
        title: "Good job!",
        text: "You Added a Contest",
        icon: "success",
      });
    }
    console.log(res);
  };
  return (
    <div>
      <Helmet>
        <title>ContestHub | AddContest</title>
      </Helmet>

      <form onSubmit={handleSubmit(SubmitHandler)} className='space-y-8 '>
        <div className='grid gap-6 mb-6 md:grid-cols-2'>
          {/* contest name  */}
          <div>
            <label
              htmlFor='contestName'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Contest name
            </label>
            <input
              {...register("name", { required: true })}
              type='text'
              id='contestName'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Contest Name'
            />
            {errors.name && (
              <span className='text-red-600 mt-8'>
                Contest Name is required
              </span>
            )}
          </div>
          {/* entry fee  */}
          <div>
            <label
              htmlFor='entryFee'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Entry Fee
            </label>
            <input
              {...register("entryFee", { required: true })}
              type='number'
              id='entryFee'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Entry Fee'
            />
            {errors.name && (
              <span className='text-red-600 mt-8'>Entry Fee is required</span>
            )}
          </div>
          {/* Prize Money */}
          <div>
            <label
              htmlFor='prizeMoney'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Prize Money
            </label>
            <input
              {...register("prizeMoney", { required: true })}
              type='number'
              id='prizeMoney'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Prize Money'
            />
            {errors.prizeMoney && (
              <span className='text-red-600 mt-8'>Name is required</span>
            )}
          </div>

          {/* Tags  */}
          <div>
            <label
              htmlFor='countries'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Select a Tag
            </label>
            <select
              {...register("tags", { required: true })}
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option value='default'>Choose a tag</option>
              <option value='businessContest'>Business Contest</option>
              <option value='medicalContest'>Medical Contest</option>
              <option value='articleWriting'>Article Writing</option>
              <option value='gamingContest'>Gaming Contest</option>
            </select>
            {errors.tags && (
              <span className='text-red-600 mt-8'>Tags is required</span>
            )}
          </div>

          {/* image  */}

          <div>
            <label
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              htmlFor='image'
            >
              Upload Image
            </label>
            <input
              {...register("image", { required: true })}
              className='block w-full text-sm text-gray-900 border p-2.5 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:py-1 file:rounded file:bg-gray-500 file:text-white'
              id='image'
              type='file'
            />
            {errors.image && (
              <span className='text-red-600 mt-8'>Name is required</span>
            )}
          </div>
          {/* banner  */}
          <div>
            <label
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              htmlFor='banner'
            >
              Upload Contest Banner
            </label>
            <input
              {...register("banner", { required: true })}
              className='block w-full text-sm text-gray-900 border p-2.5 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:py-1 file:rounded file:bg-gray-500 file:text-white'
              id='banner'
              type='file'
            />
            {errors.banner && (
              <span className='text-red-600 mt-8'>Name is required</span>
            )}
          </div>
        </div>

        {/* date  */}
        <div>
          <label
            htmlFor='deadline'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Contest deadline
          </label>
          <input
            {...register("deadline", { required: true })}
            type='date'
            id='deadline'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Contest Name'
          />
          {errors.deadline && (
            <span className='text-red-600 mt-8'>Deadline is required</span>
          )}
        </div>
        {/* Description  */}
        <div>
          <label
            htmlFor='description'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Contest Description
          </label>
          <textarea
            {...register("description", { required: true })}
            id='description'
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Write your thoughts here...'
          ></textarea>
          {errors.description && (
            <span className='text-red-600 mt-8'>Description is required</span>
          )}
        </div>
        {/* Task Submission  */}
        <div>
          <label
            htmlFor='task'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Task Submission
          </label>
          <textarea
            {...register("task", { required: true })}
            id='task'
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Write your thoughts here...'
          ></textarea>
          {errors.task && (
            <span className='text-red-600 mt-8'>Name is required</span>
          )}
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContest;
