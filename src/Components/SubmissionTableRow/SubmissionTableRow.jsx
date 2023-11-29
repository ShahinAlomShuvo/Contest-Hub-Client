import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useState } from "react";

const SubmissionTableRow = ({ row }) => {
  const { submittedTask, email, name, contestId } = row;

  const [disable, setDisable] = useState(false);

  const axiosSecure = useAxiosSecure();

  const handleWinner = async () => {
    const res = await axiosSecure.patch(
      `/contest/winner/${contestId}/${email}`
    );
    console.log(res);
    if (res.status === 200) {
      setDisable(true);
      Swal.fire({
        title: "Congratulations",
        text: "You Select The Winner",
        icon: "success",
      });
    }
  };

  return (
    <tr className='bg-white border-b dark:bg-transparent dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-white'>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        Apple MacBook Pro 17"
      </th>
      <td className='px-6 py-4'>{name}</td>
      <td className='px-6 py-4'>{email}</td>
      <td className='px-6 py-4'>{submittedTask}</td>
      <td className='px-6 py-4 text-right'>
        <button
          onClick={handleWinner}
          className={`btn btn-info ${disable && "btn-disabled"}`}
        >
          Make Winner
        </button>
      </td>
    </tr>
  );
};

export default SubmissionTableRow;
