import { useForm } from "react-hook-form";

const Hero = ({ setSearchValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSearchValue(data.search);
  };
  return (
    <div>
      <div
        className='hero min-h-[70vh]'
        style={{
          backgroundImage:
            "url(https://i.ibb.co/d4cVPck/gradient-enter-win-label-23-2150291879.jpgg)",
        }}
      >
        <div className='hero-overlay bg-opacity-60'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex gap-5'>
                <input
                  {...register("search", { required: true })}
                  type='text'
                  placeholder='Search by tags'
                  className='input input-bordered w-full text-gray-700 max-w-xs'
                />
                <button
                  type='submit'
                  className='btn btn-outline bg-[#4B4436] border-none text-white'
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
