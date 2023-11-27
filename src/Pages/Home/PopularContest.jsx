import { useQuery } from "@tanstack/react-query";
import ContestCard from "../../Components/Shared/ContestCard";
import SectionHeader from "../../Components/Shared/SectionHeader";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const PopularContest = () => {
  const axiosPublic = useAxiosPublic();

  const { isPending, data: popularContest = [] } = useQuery({
    queryKey: ["popularContest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/popularContest");
      return res.data;
    },
  });

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
          {popularContest?.map((items) => (
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
