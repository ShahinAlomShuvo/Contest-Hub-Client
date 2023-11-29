import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useForm } from "react-hook-form";
import { imgUpload } from "../../Utility/utility";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";

const UpdateContest = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: singleContest = [] } = useQuery({
    queryKey: ["singleData", id],
    queryFn: async () => {
      const res = await axiosSecure(`/contest/${id}`);
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: singleContest });

  const SubmitHandler = async (data) => {
    const {
      image: img,
      banner: bannerImg,
      entryFee: fee,
      prizeMoney: prize,
      ...restData
    } = data;

    // upload img

    // const image = await imgUpload(img[0]);

    // const banner = await imgUpload(bannerImg[0]);

    // const entryFee = parseFloat(fee);
    // const prizeMoney = parseFloat(prize);

    const updatedContest = {
      image,
      banner,
      entryFee,
      prizeMoney,
      ...restData,
    };

    /* const res = await axiosSecure.patch("/contest", contest);
    if (res.status === 200) {
      reset();
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
    console.log(res); */
    console.log(data);
  };

  return (
    <div>
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
              defaultValue={singleContest.name}
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
              defaultValue={singleContest.entryFee}
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
              defaultValue={singleContest.prizeMoney}
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
              defaultValue={singleContest.tags}
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
            defaultValue={singleContest.description}
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
            defaultValue={singleContest.task}
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
