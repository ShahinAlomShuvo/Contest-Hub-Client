import worldMap from "../../assets/Images/WorldMap.svg";

const WorldWide = () => {
  return (
    <div className='bg-[#2A1E43] py-20 '>
      <div className='container mx-auto space-y-14'>
        <div className='text-center md:w-[80%] lg:w-[70%] mx-auto text-white space-y-4 px-4 md:px-0'>
          <h2 className='text-4xl lg:text-5xl font-bold lg:tracking-wide leading-[60px]'>
            Contest managers from 80+ countries worldwide Contest hub
          </h2>
          <p className=' md:text-xl tracking-wide  font-medium '>
            Contest hub contest management system empowers thousands of contest
            organizers from all over the world to recognize excellence.
          </p>
        </div>
        <div className='w-[70%] mx-auto'>
          <img src={worldMap} alt='' />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default WorldWide;
