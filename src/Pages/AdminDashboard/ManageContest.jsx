import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FadeLoader } from "react-spinners";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManageContest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    refetch,
    data: totalContest = [],
  } = useQuery({
    queryKey: ["totalContest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/totalContest");
      return res.data;
    },
  });

  const handleStatus = async (contest) => {
    const res = await axiosSecure.patch(`/confirmContest/${contest._id}`);
    if (res.status === 200) {
      refetch();
      Swal.fire({
        title: "Good job!",
        text: "Status Updated Successfully",
        icon: "success",
      });
    }
    return res.data;
  };

  const handleDelete = (contest) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/contest/${contest._id}`).then((data) => {
          if (data.status === 200) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Contest has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>ContestHub | Mange-Contest</title>
      </Helmet>

      {isPending ? (
        <div className='flex justify-center items-center py-40'>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='text-2xl text-white  bg-[#4B4436] bg-opacity-70  h-20 '>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {totalContest.map((contest, idx) => (
                <tr key={contest._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle w-12 h-12'>
                          <img src={contest.image} />
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </td>
                  <td className='font-semibold text-gray-700'>
                    {contest.name}
                  </td>
                  <td className='font-semibold text-gray-700'>
                    {contest.status}
                  </td>
                  <th>
                    <button
                      onClick={() => handleStatus(contest)}
                      className={`btn btn-secondary text-white ${
                        contest.status === "accepted" && "btn-disabled"
                      }`}
                    >
                      {contest.status === "pending" ? "Confirm" : "Confirmed"}
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(contest)}
                      className='btn btn-ghost bg-red-600 hover:text-red-600'
                    >
                      <FaTrash className='' size={26}></FaTrash>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ManageContest;
