import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import TopWinner from "./TopWinner";
import SectionHeader from "../../Components/Shared/SectionHeader";

const ContestWinner = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000,
    });
  }, []);

  const axiosPublic = useAxiosPublic();

  const { isPending, data: topWinner = [] } = useQuery({
    queryKey: ["topWinner"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contest/top/winners");
      return res.data;
    },
  });
  console.log(topWinner);

  return (
    <section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <SectionHeader
          title={"Contest Winners "}
          subtitle={`Our past winners started just like you, and now their achievements shine on this stage. Your journey to victory starts with your participation.`}
        ></SectionHeader>

        <div className='grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 gap-y-8 lg:grid-cols-9 gap-x-0'>
          {topWinner.map((winner) => (
            <TopWinner key={winner._id} winner={winner}></TopWinner>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContestWinner;
