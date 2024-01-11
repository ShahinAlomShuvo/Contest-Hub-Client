import { useQuery } from "@tanstack/react-query";
import LeaderBoardRow from "./LeaderBoardRow";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import bgImage from "../../assets/Images/leaderBoard.avif";
import CommonBanner from "../../Components/Shared/CommonBanner";
import { FaTrophy } from "react-icons/fa6";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const LeaderBoard = () => {
  const axiosPublic = useAxiosPublic();
  const { width, height } = useWindowSize();

  const { isPending, data: winner = [] } = useQuery({
    queryKey: ["winner"],
    queryFn: async () => {
      const res = await axiosPublic.get("/contest/winners");
      return res.data;
    },
  });

  return (
    <>
      <Confetti width={width} height={height} />
      <CommonBanner bgImage={bgImage} title={"Leader Board"}></CommonBanner>
      <div className='bg-gray-900 md:py-20 md:px-20'>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
          <table className='w-full text-sm text-left rtl:text-right  text-gray-400'>
            <thead className='text-xs  uppercase bg-[#374151] text-gray-400'>
              <tr>
                <th scope='col' className='p-4'>
                  <div className='flex items-center'>
                    <FaTrophy className='text-amber-400' size='32' />
                  </div>
                </th>
                <th scope='col' className='px-6 py-3'>
                  Image
                </th>
                <th scope='col' className='px-6 py-3'>
                  Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Email
                </th>
                <th scope='col' className='px-6 py-3'>
                  Win
                </th>
              </tr>
            </thead>
            <tbody>
              {winner.map((list) => (
                <LeaderBoardRow key={list._id} list={list}></LeaderBoardRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default LeaderBoard;
