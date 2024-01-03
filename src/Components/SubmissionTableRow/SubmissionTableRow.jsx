import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const SubmissionTableRow = ({ row }) => {
  const { submittedTask, email, name, contestId, contestName } = row;
  const [disable, setDisable] = useState(false);
  const axiosSecure = useAxiosSecure();

  const { refetch, data: getWinnerEmail = [] } = useQuery({
    queryKey: ["getWinnerEmail"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contest/${contestId}`);
      return res.data.winnerEmail;
    },
  });

  const handleWinner = async () => {
    if (getWinnerEmail.length > 0) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Winner Is Declared Already",
      });
    } else {
      const res = await axiosSecure.patch(
        `/contest/winner/${contestId}/${email}`
      );

      console.log(res);
      if (res.status === 200) {
        refetch();
        setDisable(true);
        Swal.fire({
          title: "Congratulations",
          text: "You Select The Winner",
          icon: "success",
        });
      }
    }
  };

  return (
    <tr className='bg-white border-b dark:bg-transparent dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-white dark:text-gray-900 font-medium'>
      <th
        scope='row'
        className='px-6 py-4 font-medium dark:text-gray-900 whitespace-nowrap text-white'
      >
        {contestName}
      </th>
      <td className='px-6 py-4'>{name}</td>
      <td className='px-6 py-4'>{email}</td>
      <td className='px-6 py-4'>{submittedTask}</td>
      <td className='px-6 py-4 text-right'>
        <button
          onClick={handleWinner}
          className={`btn bg-[#009688] border-none ${
            disable && "btn-disabled"
          }`}
        >
          Make Winner
        </button>
      </td>
    </tr>
  );
};

export default SubmissionTableRow;
