import { useQuery } from "@tanstack/react-query";
import LeaderBoardRow from "./LeaderBoardRow";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const LeaderBoard = () => {
  const axiosSecure = useAxiosSecure();

  const { isPending, data: winner = [] } = useQuery({
    queryKey: ["winner"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contest/winners");
      return res.data;
    },
  });

  return (
    <div className='dark:bg-gray-900 py-20'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
        <div className='flex items-center justify-center '>
          <h2 className='text-white text-3xl pb-6'>Winners Leader Board</h2>
        </div>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-all-search'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label htmlFor='checkbox-all-search' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3'>
                Image
              </th>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Win
              </th>
            </tr>
          </thead>
          <tbody>
            {winner.map((list) => (
              <LeaderBoardRow key={list._id} list={list}></LeaderBoardRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
