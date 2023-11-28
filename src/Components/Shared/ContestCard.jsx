import { Link } from "react-router-dom";

const ContestCard = ({ items }) => {
  const { description, attempt_count, banner, image, name, _id } = items;
  const desc = description?.slice(0, 120);
  return (
    <div className='hover:shadow-2xl  transition   bg-white rounded-md'>
      <div className='w-full h-[180px] relative   mb-20 '>
        <img className='h-full w-full    ' src={banner} />
        <img
          className='absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[120px] h-[100px] rounded-md border-2 border-[#4B4436]'
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
          <button
            className='middle none center rounded-lg bg-[#4B4436] py-3.5 px-7 font-sans text-xs font-bold  text-white shadow-md shadow-stone-500/20 transition-all hover:shadow-lg hover:shadow-stone-500/40  active:opacity-[0.45] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full capitalize mt-6'
            data-ripple-light='true'
          >
            Contest Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContestCard;
