const LeaderBoardRow = ({ list }) => {
  const { email, name, count, image } = list;
  return (
    <tr className=' border-b bg-gray-800 border-gray-700 hover:bg-gray-600'>
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <input
            id='checkbox-table-search-1'
            type='checkbox'
            className='w-4 h-4 text-blue-600   rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
          />
          <label htmlFor='checkbox-table-search-1' className='sr-only'>
            checkbox
          </label>
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
