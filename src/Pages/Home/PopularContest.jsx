import ContestCard from "../../Components/Shared/ContestCard";
import SectionHeader from "../../Components/Shared/SectionHeader";
import useContest from "../../Hook/useContest";

const PopularContest = () => {
  const [contest, isPending] = useContest();
  return (
    <>
      <div className='bg-base-300 py-10'>
        <SectionHeader
          title={"Popular Competitions"}
          subtitle={` Explore the most sought-after contests that captivate minds, challenge
        skills, and celebrate achievement. Unleash your potential, compete with
        the best, and make your mark in these thrilling arenas of excellence.`}
        ></SectionHeader>
        <div className='grid grid-cols-1 md:grid-cols-3  container mx-auto gap-10'>
          {contest?.map((items) => (
            <ContestCard
              key={items._id}
              items={items}
              isPending={isPending}
            ></ContestCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularContest;
