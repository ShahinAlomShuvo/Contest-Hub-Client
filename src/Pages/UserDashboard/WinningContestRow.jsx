const WinningContestRow = ({ contest }) => {
  const { name, image, tags, prizeMoney, winnerEmail } = contest;
  console.log(contest);
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type='checkbox' className='checkbox' />
          </label>
        </th>
        <td>
          <div className='flex items-center gap-3'>
            <div className='avatar'>
              <div className='mask mask-squircle w-12 h-12'>
                <img src={image} />
              </div>
            </div>
            <div>
              <div className='font-bold'>{name}</div>
              <div className='text-sm opacity-50'>Winner</div>
            </div>
          </div>
        </td>
        <td>{winnerEmail}</td>
        <td>{tags}</td>
        <th>${prizeMoney}</th>
      </tr>
    </>
  );
};

export default WinningContestRow;
