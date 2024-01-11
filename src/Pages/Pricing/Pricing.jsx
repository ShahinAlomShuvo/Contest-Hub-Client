import { Helmet } from "react-helmet";
import CommonBanner from "../../Components/Shared/CommonBanner";
import bgImage from "../../assets/Images/pricing.jpg";
import pricingIcon1 from "../../assets/Images/pricingIcon1.svg";
import pricingIcon2 from "../../assets/Images/pricingIcon2.svg";
import pricingIcon3 from "../../assets/Images/pricingIcon3.svg";
import pricingIcon4 from "../../assets/Images/pricingIcon4.svg";
import SubscribeUs from "../Home/SubscribeUs";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>ContestHub | Pricing</title>
      </Helmet>
      <CommonBanner bgImage={bgImage} title={"Pricing"}></CommonBanner>

      <div className='bg-base-200 py-20 '>
        <div className=' space-y-10 px-4 lg:px-0'>
          <div className='lg:w-3/5 bg-white shadow-lg p-8 mx-auto space-y-8 px-4 md:px-16 lg:px-8 rounded-md hover:bg-base-300'>
            <div className='flex justify-between'>
              <div className='space-y-2'>
                <h2 className='text-3xl text-[#2f363b] font-medium'>
                  Full Package
                </h2>
                <p className='text-[#a5afb8]'>
                  Complete access to all the ContestHub.
                </p>
              </div>
              <div className='space-y-2'>
                <p className='text-[#a5afb8]'>from</p>
                <p className='text-[#2f363b]'>
                  <span className='text-3xl  font-medium'>$97</span>
                  <span className='text-sm'> /mo</span>
                </p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 justify-between '>
              <ul className='grid md:grid-cols-2 jus gap-8 flex-1'>
                <li className='flex items-center gap-4 text-[#a5afb8]'>
                  <img className='w-10' src={pricingIcon1} alt='' />
                  <span>COMPETITIONS</span>
                </li>
                <li className='flex items-center gap-4 text-[#a5afb8]'>
                  <img className='w-10' src={pricingIcon2} alt='' />
                  <span>REWARDS</span>
                </li>
                <li className='flex items-center gap-4 text-[#a5afb8]'>
                  <img className='w-10' src={pricingIcon3} alt='' />
                  <span>GALLERIES</span>
                </li>
                <li className='flex items-center gap-4 text-[#a5afb8]'>
                  <img className='w-10' src={pricingIcon4} alt='' />
                  <span>CAPTURES</span>
                </li>
              </ul>
              <button className='bg-[#009688] px-4 lg:px-8 rounded-full btn  text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 mt-6 border-none '>
                Buy Plan
              </button>
            </div>
          </div>
          {/* individual card 1  */}
          <div className='lg:w-3/5 mx-auto border-2 p-5 rounded-md hover:bg-white hover:shadow-lg transition'>
            <div className='flex justify-between  flex-col-reverse md:flex-row gap-4'>
              <div className='flex flex-wrap md:flex-nowrap justify-center gap-4'>
                <img className='w-24 h-24' src={pricingIcon1} alt='' />
                <div className='space-y-2 text-center md:text-left'>
                  <h3 className='text-[#2f363b] text-2xl font-medium'>
                    Competitions
                  </h3>
                  <p className='text-[#a5afb8]  md:w-[90%] ='>
                    Easily set up and run giveaways, contests & sweepstakes that
                    drive real user engagement.
                  </p>
                  <button className='bg-[#009688] px-4 lg:px-8 rounded-full btn  text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 border-none btn-sm'>
                    Buy Plan
                  </button>
                </div>
              </div>
              <div className='space-y-2 md:w-32 text-center md:text-left'>
                <p className='text-[#a5afb8]'>from</p>
                <p className='text-[#2f363b]'>
                  <span className='text-3xl  font-medium'>$10</span>
                  <span className='text-sm'> /mo</span>
                </p>
              </div>
            </div>
          </div>
          {/* individual card 2  */}
          <div className='lg:w-3/5 mx-auto border-2 p-5 rounded-md hover:bg-white hover:shadow-lg transition'>
            <div className='flex justify-between  flex-col-reverse md:flex-row gap-4'>
              <div className='flex flex-wrap md:flex-nowrap justify-center gap-4'>
                <img className='w-24 h-24' src={pricingIcon2} alt='' />
                <div className='space-y-2 text-center md:text-left'>
                  <h3 className='text-[#2f363b] text-2xl font-medium'>
                    Rewards
                  </h3>
                  <p className='text-[#a5afb8]  md:w-[90%] ='>
                    Create unlockable rewards using millions of action
                    combinations in minutes.
                  </p>
                  <button className='bg-[#009688] px-4 lg:px-8 rounded-full btn  text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 border-none btn-sm'>
                    Buy Plan
                  </button>
                </div>
              </div>
              <div className='space-y-2 md:w-32 text-center md:text-left'>
                <p className='text-[#a5afb8]'>from</p>
                <p className='text-[#2f363b]'>
                  <span className='text-3xl  font-medium'>$29</span>
                  <span className='text-sm'> /mo</span>
                </p>
              </div>
            </div>
          </div>
          {/* individual card 3  */}
          <div className='lg:w-3/5 mx-auto border-2 p-5 rounded-md hover:bg-white hover:shadow-lg transition'>
            <div className='flex justify-between  flex-col-reverse md:flex-row gap-4'>
              <div className='flex flex-wrap md:flex-nowrap justify-center gap-4'>
                <img className='w-24 h-24' src={pricingIcon3} alt='' />
                <div className='space-y-2 text-center md:text-left'>
                  <h3 className='text-[#2f363b] text-2xl font-medium'>
                    Galleries
                  </h3>
                  <p className='text-[#a5afb8]  md:w-[90%] ='>
                    Collect, curate & display the content that matters to your
                    business.
                  </p>
                  <button className='bg-[#009688] px-4 lg:px-8 rounded-full btn  text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 border-none btn-sm'>
                    Buy Plan
                  </button>
                </div>
              </div>
              <div className='space-y-2 md:w-32 text-center md:text-left'>
                <p className='text-[#a5afb8]'>from</p>
                <p className='text-[#2f363b]'>
                  <span className='text-3xl  font-medium'>$29</span>
                  <span className='text-sm'> /mo</span>
                </p>
              </div>
            </div>
          </div>
          {/* individual card 1  */}
          <div className='lg:w-3/5 mx-auto border-2 p-5 rounded-md hover:bg-white hover:shadow-lg transition'>
            <div className='flex justify-between  flex-col-reverse md:flex-row gap-4'>
              <div className='flex flex-wrap md:flex-nowrap justify-center gap-4'>
                <img className='w-24 h-24' src={pricingIcon4} alt='' />
                <div className='space-y-2 text-center md:text-left'>
                  <h3 className='text-[#2f363b] text-2xl font-medium'>
                    Captures
                  </h3>
                  <p className='text-[#a5afb8]  md:w-[90%] ='>
                    Target beautiful messages or opt-in forms to right users at
                    the right time to build your email list & grow your
                    business.
                  </p>
                  <button className='bg-[#009688] px-4 lg:px-8 rounded-full btn  text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 border-none btn-sm'>
                    Buy Plan
                  </button>
                </div>
              </div>
              <div className='space-y-2 md:w-32 text-center md:text-left'>
                <p className='text-[#a5afb8]'>from</p>
                <p className='text-[#2f363b]'>
                  <span className='text-3xl  font-medium'>$29</span>
                  <span className='text-sm'> /mo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscribeUs></SubscribeUs>
    </>
  );
};

export default Pricing;
