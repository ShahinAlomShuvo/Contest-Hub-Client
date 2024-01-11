import { useForm } from "react-hook-form";
import bgImage from "../../assets/Images/hero-bg.svg";
import heroImage from "../../assets/Images/hero.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const HeroSection = ({ setSearchValue }) => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSearchValue(data.search);
  };

  return (
    <div
      className='h-screen flex items-center justify-center py-[480px] md:py-80 xl:py-0 px-4  xl:px-0'
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "#2A1E43",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className='container mx-auto grid gap-10 md:grid-cols-2 md:px-4 xl:px-0'>
        <div
          data-aos='fade-up'
          className='text-white flex flex-col justify-center space-y-6'
        >
          <h2 className='text-2xl md:text-3xl'>
            Manage your contest competitions with the right tools
          </h2>
          <p className='lg:w-[90%]'>
            Welcome to ContestHub - where innovation meets recognition! Our
            user-friendly platform fosters creativity, engages communities, and
            celebrates talent across various domains. Whether you're into design
            competitions, art showcases, writing challenges, or any creative
            endeavor, ContestHub is your seamless solution for creating contests
            and efficiently selecting winners. Join us and unleash your
            creativity!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex lg:w-[90%]'>
              <input
                {...register("search", { required: true })}
                type='text'
                placeholder='Search by tag'
                className='py-4 px-4 rounded-xl w-full rounded-r-none outline-primary-content text-gray-500'
              />
              <button className='bg-[#009688] px-4 lg:px-8 rounded-xl rounded-l-none transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95'>
                Search
              </button>
            </div>
          </form>
        </div>
        <div className='order-first md:order-last'>
          <img src={heroImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
