import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FadeLoader } from "react-spinners";

const MyCreateContest = () => {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();

  const {
    isPending,
    refetch,
    data: creatorContest = [],
  } = useQuery({
    queryKey: [user?.email, "creatorContest"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/contest/${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (contest) => {
    console.log(contest._id);
  };
  return (
    <>
      {isPending ? (
        <div className='flex justify-center items-center py-40'>
          <FadeLoader color='#36d7b7' />
        </div>
      ) : (
        <div>
          <h2 className='text-3xl font-semibold pb-4'>
            Total Items: {creatorContest.length}
          </h2>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr className='text-2xl text-white  bg-orange-400 h-20 '>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Action</th>
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
                        <div></div>
                      </div>
                    </td>
                    <td>{contest.name}</td>
                    <td>${contest.status}</td>
                    <th>
                      <Link to={`/dashboard/updateItem/${contest._id}`}>
                        <button className='btn btn-ghost bg-orange-400'>
                          <FaEdit size={26}></FaEdit>
                        </button>
                      </Link>
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
        </div>
      )}
    </>
  );
};

export default MyCreateContest;