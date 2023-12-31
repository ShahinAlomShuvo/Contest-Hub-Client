const CreatorCard = ({ data }) => {
  const desc = data.contestDescription.slice(0, 130);
  return (
    <div className='w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border text-center ml-10'>
      <div className='flex justify-center -mt-16 '>
        <img
          className='object-cover w-24 h-24 ring-4 ring-[#009688] rounded-full  '
          alt='Testimonial avatar'
          src={data.image}
        />
      </div>

      <h2 className='mt-2 text-2xl font-semibold text-gray-800  '>
        {data.name}
      </h2>

      <p>{data.contestName}</p>

      <p className='mt-2 text-sm text-gray-600 '>{desc}</p>

      {/* <div className='flex justify-center mt-4'>
        <a
          href='#'
          className='text-lg font-medium text-blue-600 '
          tabIndex='0'
          role='link'
        >
          {data.name}
        </a>
      </div> */}
    </div>
  );
};

export default CreatorCard;
