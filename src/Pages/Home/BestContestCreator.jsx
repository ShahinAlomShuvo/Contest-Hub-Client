import Marquee from "react-fast-marquee";
import CreatorCard from "./CreatorCard";
import SectionHeader from "../../Components/Shared/SectionHeader";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BestContestCreator = () => {
  const axiosSecure = useAxiosSecure();

  const { data: bestCreator = [] } = useQuery({
    queryKey: ["bestCreator"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contest/top/creator");
      return res.data;
    },
  });

  return (
    <div className='bg-[#E2EAEE] pt-10 pb-20'>
      <SectionHeader
        title={"Meet Our Creator"}
        subtitle={`Our past winners started just like you, and now their achievements shine on this stage. Your journey to victory starts with your participation.`}
      ></SectionHeader>

      <Marquee>
        {bestCreator.map((data, idx) => (
          <CreatorCard key={idx} data={data}></CreatorCard>
        ))}
      </Marquee>
    </div>
  );
};

export default BestContestCreator;
