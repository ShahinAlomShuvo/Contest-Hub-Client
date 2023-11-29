const SubmissionTableRow = ({ row }) => {
  const { submittedTask, email, name } = row;

  const axiosSecure = useAxi;

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
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
        <button className='btn'>Make Winner</button>
      </td>
    </tr>
  );
};

export default SubmissionTableRow;
