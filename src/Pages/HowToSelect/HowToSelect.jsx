import { useEffect } from "react";
import SectionHeader from "../../Components/Shared/SectionHeader";
import AOS from "aos";
import "aos/dist/aos.css";

const HowToSelect = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <>
      <section className='py-10 bg-gray-100 sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <SectionHeader
            title={"How do we create success"}
            subtitle={`Empowering Creativity, Igniting Passion: Join the Contest Hub,
              Submit, Compete, and Celebrate Your Triumphs!`}
          ></SectionHeader>

          <ul className='max-w-md mx-auto mt-16 space-y-12'>
            <li data-aos='zoom-in' className='relative flex items-start'>
              <div
                className='-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full'
                aria-hidden='true'
              ></div>

              <div className='relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow'>
                <svg
                  className='w-10 h-10 text-[#009688]'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </div>
              <div className='ml-6'>
                <h3 className='text-lg font-semibold text-black'>
                  Contest Registration
                </h3>
                <p className='mt-4 text-base text-gray-600'>
                  Users register, select a contest, and submit entries with
                  required information and files, receiving a confirmation.
                </p>
              </div>
            </li>

            <li data-aos='zoom-in' className='relative flex items-start'>
              <div
                className='-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full'
                aria-hidden='true'
              ></div>

              <div className='relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow'>
                <svg
                  className='w-10 h-10 text-[#009688]'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                  />
                </svg>
              </div>
              <div className='ml-6'>
                <h3 className='text-lg font-semibold text-black'>
                  Winner Declaration
                </h3>
                <p className='mt-4 text-base text-gray-600'>
                  After closing submissions, admin/judges evaluate entries,
                  declare winners, and notify them. Winning entries are
                  showcased.
                </p>
              </div>
            </li>

            <li data-aos='zoom-in' className='relative flex items-start'>
              <div className='relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow'>
                <svg
                  className='w-10 h-10 text-[#009688]'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <div className='ml-6'>
                <h3 className='text-lg font-semibold text-black'>
                  Prize Distribution
                </h3>
                <p className='mt-4 text-base text-gray-600'>
                  Winners confirm eligibility, claim prizes, and undergo a
                  verification process. Admin processes distribution, and
                  winners receive prizes, updating the contest status.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HowToSelect;
