import { useQuery } from "@tanstack/react-query";
import LeaderBoardRow from "./LeaderBoardRow";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const LeaderBoard = () => {
  const axiosPublic = useAxiosPublic();

  const { isPending, data: winner = [] } = useQuery({
    queryKey: ["winner"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contest/winners");
      return res.data;
    },
  });

  return (
    <div className='bg-gray-900 py-20'>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
        <div className='flex items-center justify-center '>
          <h2 className='text-white text-3xl pb-6'>Winners Leader Board</h2>
        </div>
        <table className='w-full text-sm text-left rtl:text-right  text-gray-400'>
          <thead className='text-xs  uppercase bg-[#374151] text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-all-search'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600  rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
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
