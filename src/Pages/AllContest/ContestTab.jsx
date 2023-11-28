import { BounceLoader } from "react-spinners";
import ContestCard from "../../Components/Shared/ContestCard";

const ContestTab = ({ contest, isPending }) => {
  return (
    <>
      {isPending ? (
        <div className='flex justify-center py-20'>
          <BounceLoader color='#36d7b7' />
        </div>
      ) : (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0 gap-8 pt-10'>
          {contest.map((items) => (
            <ContestCard key={items._id} items={items}></ContestCard>
          ))}
        </div>
      )}
    </>
  );
};

export default ContestTab;
