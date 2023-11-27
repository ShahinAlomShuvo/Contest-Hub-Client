import { useEffect, useState } from "react";
import SectionHeader from "../../Components/Shared/SectionHeader";
import Marquee from "react-fast-marquee";
import WinnerCard from "./WinnerCard";

const ContestWinner = () => {
  const [winner, setWinner] = useState([]);
  useEffect(() => {
    fetch("/winner.json")
      .then((res) => res.json())
      .then((data) => setWinner(data));
  }, []);

  return (
    <div className='bg-[#E2EAEE] pt-10 pb-20'>
      <SectionHeader
        title={"Contest Winners "}
        subtitle={`Our past winners started just like you, and now their achievements shine on this stage. Your journey to victory starts with your participation.`}
      ></SectionHeader>

      <Marquee>
        {winner.map((data, idx) => (
          <WinnerCard key={idx} data={data}></WinnerCard>
        ))}
      </Marquee>
    </div>
  );
};

export default ContestWinner;
