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

  console.log(getWinnerEmail);

  const handleWinner = async () => {
    const res = await axiosSecure.patch(
      `/contest/winner/${contestId}/${email}`
    );

    if (getWinnerEmail !== "") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Winner Is Declared Already",
      });
    }

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
  };

  return (
    <tr className='bg-white border-b dark:bg-transparent dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-white'>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
      >
        {contestName}
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
