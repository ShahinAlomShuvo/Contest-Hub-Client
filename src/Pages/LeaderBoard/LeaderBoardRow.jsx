const LeaderBoardRow = ({ list }) => {
  const { email, name, count, image } = list;
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <input
            id='checkbox-table-search-1'
            type='checkbox'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
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
