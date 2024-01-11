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
    <>
      <Link to={`/allContest/${_id}`}>
        <div
          data-aos='zoom-in'
          className='rounded-md hover:border-transparent hover:ring-4 ring-[#009688] transition duration-300 shadow-xl'
        >
          <img
            className='h-36 w-full rounded-t-rounded-md rounded-t-md'
            src={image}
            alt=''
          />
          <div className='flex  gap-3 items-center bg-white shadow-xl py-3 px-4 rounded-b-md overflow-hidden'>
            <img className='w-8 h-8 rounded-full' src={banner} alt='' />
            <h2 className='font-medium '>{name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ContestCard;
