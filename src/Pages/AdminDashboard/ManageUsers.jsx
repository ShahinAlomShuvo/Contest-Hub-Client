import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    isPending,
    refetch,
    data: manageUsers = [],
  } = useQuery({
    queryKey: ["manageUsers"],
    queryFn: async () => {
      const res = axiosSecure.get("/allUsers");
      return (await res).data;
    },
  });

  const handleRole = async (role) => {
    const res = await axiosSecure.patch(role);
    if (res.status === 200) {
      refetch();
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  };
  console.log(manageUsers);
  return (
    <>
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

                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {manageUsers.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>

                  <td className='font-semibold text-xl text-gray-700'>
                    {user.name}
                  </td>
                  <td className='font-semibold text-xl text-gray-700'>
                    {user.email}
                  </td>
                  <td className='font-semibold text-xl text-gray-700'>
                    {user.role}
                  </td>
                  <td className='font-semibold text-xl text-gray-700'>
                    <div className='dropdown dropdown-end'>
                      <div tabIndex={0} role='button' className='btn m-1'>
                        Change Role
                      </div>
                      <ul className='dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-96 space-y-4 p-16'>
                        <button
                          onClick={() =>
                            handleRole(`/users/${user.email}/admin`)
                          }
                          className='btn btn-primary'
                        >
                          Admin
                        </button>
                        <button
                          onClick={() =>
                            handleRole(`/users/${user.email}/creator`)
                          }
                          className='btn btn-primary'
                        >
                          Contest Creator
                        </button>
                        <button
                          onClick={() =>
                            handleRole(`/users/${user.email}/user`)
                          }
                          className='btn btn-primary'
                        >
                          User
                        </button>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ManageUsers;
