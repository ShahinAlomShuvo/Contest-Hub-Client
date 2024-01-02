import subscribe from "../../assets/Images/image.webp";
import bgImage from "../../assets/Images/hero-bg.svg";
import { Link } from "react-router-dom";

const SubscribeUs = () => {
  return (
    <div
      className=' py-20'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "#2A1E43",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='container mx-auto grid grid-cols-6 gap-10 place-items-center'>
        <div className='col-span-2'>
          <img src={subscribe} />
        </div>
        <div className='col-span-3'>
          <h2 className='text-3xl font-bold text-white'>
            INVITE FRIENDS AND WIN REWARDS. <br />
            JOIN ContestHub TODAY
          </h2>
        </div>
        <Link to={"/pricing"}>
          <button className='bg-[#009688] px-4 lg:px-8 rounded-xl btn btn-block text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 mt-6 border-none'>
            Subscribe Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubscribeUs;
