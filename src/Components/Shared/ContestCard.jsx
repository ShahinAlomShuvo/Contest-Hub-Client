import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ContestCard = ({ items }) => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const { description, attempt_count, banner, image, name, _id } = items;
  const desc = description?.slice(0, 120);
  return (
    <div
      data-aos='fade-up'
      className='group bg-white rounded-md transition duration-300 shadow-xl  hover:scale-y-105'
    >
      <div className='w-full h-[180px] relative   mb-20 '>
        <img className='h-full w-full rounded-t-md   ' src={banner} />
        <img
          className='absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[120px] h-[100px] rounded-md  ring-4 ring-[#009688]'
          src={image}
          alt=''
        />
      </div>
      <div className='px-6 space-y-3 mb-10'>
        <h2 className='font-semibold text-xl'>{name}</h2>
        <p className='font-light text-neutral-700 text-base'>
          Participants:{attempt_count}
        </p>
        <p className='font-light text-neutral-500'>{desc}......</p>
        <Link to={`/allContest/${_id}`}>
          <button className='bg-[#009688] px-4 lg:px-8 rounded-xl btn btn-block text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 mt-6'>
            Contest Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContestCard;
