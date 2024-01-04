import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useForm } from "react-hook-form";
import { imgUpload } from "../../Utility/utility";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const UpdateContest = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const navigate = useNavigate();

  const { isPending, data: singleContest = [] } = useQuery({
    queryKey: ["singleData", id],
    queryFn: async () => {
      const res = await axiosSecure(`/contest/${id}`);
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isPending && singleContest) {
      setValue("name", singleContest.name || "");
      setValue("entryFee", singleContest.entryFee || "");
      setValue("prizeMoney", singleContest.prizeMoney || "");
      setValue("tags", singleContest.tags || "");
      setValue("image", null);
      setValue("banner", null);
      setValue("deadline", singleContest.deadline || "");
      setValue("description", singleContest.description || "");
      setValue("task", singleContest.task || "");
    }
  }, [isPending, singleContest, setValue]);

  const SubmitHandler = async (data) => {
    const {
      image: img,
      banner: bannerImg,
      entryFee: fee,
      prizeMoney: prize,
      ...restData
    } = data;

    // upload img
    let image, banner;
    if (data.image) {
      image = await imgUpload(img[0]);
    }
    if (data.banner) {
      banner = await imgUpload(bannerImg[0]);
    }

    const entryFee = parseFloat(fee);
    const prizeMoney = parseFloat(prize);

    const updatedContest = {
      image,
      banner,
      entryFee,
      prizeMoney,
      ...restData,
    };

    const res = await axiosSecure.patch(
      `/contest/update/${id}`,
      updatedContest
    );
    if (res.status === 200) {
      navigate(-1);
      Swal.fire({
        title: "Success",
        text: "You Updated A Contest",
        icon: "success",
      });
    }
    console.log(res.data);
  };

  return (
    <div className='border-2 border-white p-10 rounded space-y-8'>
      <Helmet>
        <title>ContestHub | Update-Contest</title>
      </Helmet>
      <div className='flex justify-center '>
        <h2 className='text-3xl font-bold text-white border-b'>
          Add A New Contest
        </h2>
      </div>
      <form onSubmit={handleSubmit(SubmitHandler)} className='space-y-8'>
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
              {...register("name")}
              type='text'
              id='contestName'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Contest Name'
            />
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
              {...register("entryFee")}
              type='number'
              id='entryFee'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Entry Fee'
            />
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
              {...register("prizeMoney")}
              type='number'
              id='prizeMoney'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Prize Money'
            />
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
              {...register("tags")}
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option>Choose a tag</option>
              <option value='businessContest'>Business Contest</option>
              <option value='medicalContest'>Medical Contest</option>
              <option value='articleWriting'>Article Writing</option>
              <option value='gamingContest'>Gaming Contest</option>
            </select>
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
              {...register("image")}
              className='block w-full text-sm text-gray-900 border p-2.5 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:py-1 file:rounded file:bg-gray-500 file:text-white'
              id='image'
              type='file'
            />
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
              {...register("banner")}
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
            {...register("deadline")}
            type='date'
            id='deadline'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Contest Name'
          />
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
            {...register("description")}
            id='description'
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Write your thoughts here...'
          ></textarea>
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
            {...register("task")}
            id='task'
            rows='4'
            className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Write your thoughts here...'
          ></textarea>
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

export default UpdateContest;
