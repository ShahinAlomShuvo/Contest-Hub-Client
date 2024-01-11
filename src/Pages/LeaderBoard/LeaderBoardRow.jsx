import { FaTrophy } from "react-icons/fa6";

const LeaderBoardRow = ({ list }) => {
  const { email, name, count, image } = list;
  return (
    <tr className=' border-b bg-gray-800 border-gray-700 hover:bg-gray-600'>
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <FaTrophy className='text-amber-400' size='32' />
        </div>
      </td>
      <th
        scope='row'
        className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
      >
        <img className='w-10 h-10 rounded-full' src={image} alt='Jese image' />
      </th>
      <td className='px-6 py-4 text-base font-semibold'>{name}</td>
      <td className='px-6 py-4 text-base font-semibold'>{email}</td>
      <td className='px-6 py-4'>{count}</td>
    </tr>
  );
};

export default LeaderBoardRow;
