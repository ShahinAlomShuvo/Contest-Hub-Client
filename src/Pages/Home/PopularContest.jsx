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
      <div className='bg-[#F2F2F3] py-10'>
        <SectionHeader
          title={"Popular Contests"}
          subtitle={`Trending Contests. Dive in now and show your skills in the most popular competitions. Your spotlight moment awaits!`}
        ></SectionHeader>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  container mx-auto gap-10 px-4 xl:px-0'>
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
