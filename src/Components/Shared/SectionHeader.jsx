const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className='text-center space-y-4 py-10'>
      <h2 className='text-4xl font-semibold'>{title}</h2>
      <p className='text-gray-500 w-4/5 md:w-1/3 mx-auto'>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
