import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FadeLoader } from "react-spinners";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

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

  const handleRole = async (user, role) => {
    const res = await axiosSecure.patch(`/users/${user.email}/${role}`);
    if (res.status === 200) {
      refetch();
      Swal.fire({
        title: "Good job!",
        text: "Role updated successfully!",
        icon: "success",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>ContestHub | Manage-User</title>
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
              <tr className='text-2xl text-white  bg-[#2A1E43]  h-20 '>
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
                  <td className='font-semibold text-xl text-gray-700 capitalize'>
                    {user.role}
                  </td>
                  <td className='font-semibold text-xl text-gray-700'>
                    <select
                      className='select select-bordered w-full max-w-xs bg-[#009688] text-white'
                      onChange={(e) => handleRole(user, e.target.value)}
                    >
                      <option disabled selected>
                        Select A Role
                      </option>
                      <option value='user'>User</option>
                      <option value='creator'>Creator</option>
                      <option value='admin'>Admin</option>
                    </select>
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
