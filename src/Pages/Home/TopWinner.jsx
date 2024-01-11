const TopWinner = ({ winner }) => {
  return (
    <>
      <div data-aos='flip-left'>
        <img
          className='object-cover mx-auto rounded-lg w-28 h-28 '
          src={winner.image}
        />
        <p className='mt-8 text-lg font-semibold leading-tight text-black'>
          {winner.name}
        </p>
        <p className='mt-1 text-base leading-tight text-gray-600'>Winner</p>
      </div>

      <div className='hidden lg:block'></div>
    </>
  );
};

export default TopWinner;
