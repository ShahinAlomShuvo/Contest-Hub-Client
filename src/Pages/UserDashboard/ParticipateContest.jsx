import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import { FadeLoader } from "react-spinners";
import ContestDeadline from "./ContestDeadline";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ParticipateContest = () => {
  const [contests, setContests] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    isPending,
    refetch,
    data: registerContest = [],
  } = useQuery({
    queryKey: [user?.email, "singleCreatorContest"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        encodeURI(`/singleCreatorContest/${user?.email}`)
      );

      return res.data;
    },
  });

  //   implement sorting
  useEffect(() => {
    if (registerContest) {
      const upcoming = registerContest.filter(
        (c) => new Date(c.deadline).getTime() > new Date().getTime()
      );

      const expired = registerContest.filter(
        (c) => new Date(c.deadline).getTime() <= new Date().getTime()
      );

      const sortUpcoming = upcoming.sort((a, b) =>
        sorting
          ? new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
          : new Date(b.deadline).getTime() - new Date(a.deadline).getTime()
      );

      setContests([...sortUpcoming, ...expired]);
    }
  }, [registerContest, sorting]);

  //   handle modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //   implemnt submit
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {isPending ? (
        <div className='flex justify-center items-center py-40'>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <div>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr className='text-2xl text-white  bg-[#4B4436] bg-opacity-70  h-20 '>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>
                    Deadline
                    {
                      <button
                        onClick={() => setSorting(!sorting)}
                        className='btn btn-ghost'
                      >
                        {sorting ? <IoIosArrowDown /> : <IoIosArrowUp />}
                      </button>
                    }
                  </th>
                  <th>Participate</th>
                </tr>
              </thead>
              <tbody>
                {contests.map((contest, idx) => (
                  <tr key={contest._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='mask mask-squircle w-12 h-12'>
                            <img src={contest.image} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='font-semibold text-gray-700'>
                      {contest.name}
                    </td>
                    <td className='font-semibold text-gray-700'>
                      <ContestDeadline
                        date={contest.deadline}
                      ></ContestDeadline>
                    </td>
                    <td className='font-semibold text-gray-700'>
                      <button
                        disabled={
                          new Date(contest.deadline).getTime() <=
                          new Date().getTime()
                        }
                        className='btn'
                        data-modal-target='default-modal'
                        data-modal-toggle='default-modal'
                        type='button'
                        onClick={openModal}
                      >
                        Participate
                      </button>

                      {/* modal start from here  */}

                      {isModalOpen && (
                        <div
                          id='default-modal'
                          tabIndex='-1'
                          aria-hidden='true'
                          className='fixed top-0 right-0 bottom-0 z-50 overflow-y-auto overflow-x-hidden justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
                        >
                          <div className='relative p-4 w-full max-w-2xl max-h-full'>
                            {/* Modal content */}
                            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                              {/* Modal header */}
                              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                                <button
                                  type='button'
                                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                                  data-modal-hide='default-modal'
                                  onClick={closeModal}
                                >
                                  <svg
                                    className='w-3 h-3'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 14 14'
                                  >
                                    <path
                                      stroke='currentColor'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                      strokeWidth='2'
                                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                    />
                                  </svg>
                                  <span className='sr-only'>Close modal</span>
                                </button>
                              </div>
                              {/* Modal body */}
                              <div className='p-4 md:p-5 space-y-4'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                  <textarea
                                    {...register("submittedAns", {
                                      required: true,
                                    })}
                                    id='submittedAns'
                                    rows='10'
                                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                    placeholder='Submit your task here'
                                  ></textarea>
                                  {errors.submittedAns && (
                                    <span className='text-red-600 mt-8'>
                                      You Must Fulfil The Requirement
                                    </span>
                                  )}
                                  <div className='flex justify-end mt-4'>
                                    <button
                                      type='submit'
                                      className='btn btn-primary '
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ParticipateContest;
