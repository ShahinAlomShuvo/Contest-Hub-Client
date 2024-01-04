import { Fragment, useState } from "react";
import ContestDeadline from "./ContestDeadline";
import { useForm } from "react-hook-form";
import useAuth from "../../Hook/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { Dialog, Transition } from "@headlessui/react";

const TableRow = ({ contest, idx }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [disable, setDisable] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  //   implemnt submit
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const submission = {
      email: user.email,
      name: user.displayName,
      contestId: data.contestId,
      contestName: contest.name,
      submittedTask: data.submittedTask,
    };
    console.log(submission);

    const res = await axiosSecure.post("/contest-submitted-task", submission);
    console.log(res.data);
    if (res.status === 200) {
      setIsOpen(false);
      setDisable(true);
      reset();
      Swal.fire({
        title: "Good job!",
        text: "You submitted your task",
        icon: "success",
      });
    }
  };

  //   handle modal

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <tr>
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
      <td className='font-semibold text-gray-700'>{contest.name}</td>
      <td className='font-semibold text-gray-700'>
        <ContestDeadline date={contest.deadline}></ContestDeadline>
      </td>
      <td className='font-semibold text-gray-700'>
        <button
          disabled={
            new Date(contest.deadline).getTime() <= new Date().getTime()
          }
          className={`btn bg-[#009688] border-none ${
            disable ? "btn-disabled" : ""
          }`}
          data-modal-target='default-modal'
          data-modal-toggle='default-modal'
          type='button'
          onClick={openModal}
        >
          Participate
        </button>

        {/* modal start from here  */}
        {isOpen && (
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='fixed inset-0 bg-black/25' />
              </Transition.Child>

              <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                  <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900 pb-6'
                      >
                        Submit Your Answer
                      </Dialog.Title>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea
                          {...register("submittedTask", {
                            required: true,
                          })}
                          id='submittedTask'
                          rows='6'
                          className='textarea textarea-bordered w-full'
                          placeholder='Submit your task here'
                        ></textarea>
                        {errors.submittedTask && (
                          <span className='text-red-600 mt-8'>
                            You Must Fulfil The Requirement
                          </span>
                        )}
                        <input
                          {...register("contestId")}
                          type='hidden'
                          value={contest._id}
                        ></input>

                        <div className='flex justify-end mt-4'>
                          <button type='submit' className='btn btn-primary '>
                            Submit
                          </button>
                        </div>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
