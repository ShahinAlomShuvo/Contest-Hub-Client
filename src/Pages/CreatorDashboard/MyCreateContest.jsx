import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FadeLoader } from "react-spinners";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const MyCreateContest = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    isPending,
    refetch,
    data: creatorContest = [],
  } = useQuery({
    queryKey: [user?.email, "creatorContest"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        encodeURI(`/creatorContest/${user?.email}`)
      );

      return res.data;
    },
  });

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
        axiosSecure.delete(`/contest/${contest._id}`).then((res) => {
          console.log(res);
          if (res.status === 200) {
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
      {isPending ? (
        <div className='flex justify-center items-center py-40'>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <div>
          <h2 className='text-3xl font-semibold pb-4 text-center'>
            My Added Contest: {creatorContest.length}
          </h2>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr className='text-xl text-white  bg-[#4B4436] bg-opacity-70  h-20 '>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
                  <th>Submission</th>
                </tr>
              </thead>
              <tbody>
                {creatorContest.map((contest, idx) => (
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
                      {contest.status}
                    </td>
                    <td>
                      {contest.status === "pending" ? (
                        <Link to={`/dashboard/updateContest/${contest._id}`}>
                          <button className='btn btn-ghost bg-slate-700'>
                            <FaEdit size={26}></FaEdit>
                          </button>
                        </Link>
                      ) : (
                        <button className='btn btn-disabled'>
                          <FaEdit className='' size={26}></FaEdit>
                        </button>
                      )}
                    </td>
                    <td>
                      {contest.status === "pending" ? (
                        <button
                          onClick={() => handleDelete(contest)}
                          className='btn btn-ghost bg-red-600 hover:text-red-600'
                        >
                          <FaTrash className='' size={26}></FaTrash>
                        </button>
                      ) : (
                        <button
                          disabled
                          className='btn btn-ghost bg-red-600 hover:text-red-600'
                        >
                          <FaTrash className='' size={26}></FaTrash>
                        </button>
                      )}
                    </td>
                    <td className='font-semibold text-gray-700'>
                      <Link to={`/dashboard/seeSubmission/${contest._id}`}>
                        <button
                          className={`btn btn-sm btn-info ${
                            contest.status === "pending" && "btn-disabled"
                          }`}
                        >
                          See Submission
                        </button>
                      </Link>
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

export default MyCreateContest;
