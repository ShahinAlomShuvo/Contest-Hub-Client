import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useParams } from "react-router-dom";
import SubmissionTableRow from "../../Components/SubmissionTableRow/SubmissionTableRow";

const SeeSubmission = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { isPending, data: aContestAllSubmission = [] } = useQuery({
    queryKey: ["aContestAllSubmission"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contest-submitted-task/${id}`);
      return res.data;
    },
  });

  console.log(aContestAllSubmission);

  return (
    <div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Contest name
              </th>
              <th scope='col' className='px-6 py-3'>
                Participant Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Submitted Task
              </th>
              <th scope='col' className='px-6 py-3'>
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            {aContestAllSubmission.map((submission) => (
              <SubmissionTableRow
                key={submission.id}
                row={submission}
              ></SubmissionTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeeSubmission;
