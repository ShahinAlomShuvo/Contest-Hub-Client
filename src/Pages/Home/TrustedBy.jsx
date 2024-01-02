import company1 from "../../assets/Images/overwatch.png";
import company2 from "../../assets/Images/capcom.png";
import company3 from "../../assets/Images/clublogo.png";
import company4 from "../../assets/Images/dreamhack.png";
import company5 from "../../assets/Images/eMLS.png";
import company6 from "../../assets/Images/kumite.png";
import company7 from "../../assets/Images/starcraft.png";
import company8 from "../../assets/Images/twitch-rivals.png";

import Marquee from "react-fast-marquee";
import SectionHeader from "../../Components/Shared/SectionHeader";

const TrustedBy = () => {
  return (
    <div className='bg-gray-400 pb-10 pt-0'>
      <SectionHeader title={"Trusted By"}></SectionHeader>
      <Marquee>
        <img className='w-44  mr-14' src={company1} alt='' />
        <img className='w-44  mr-14' src={company2} alt='' />
        <img className='w-44  mr-14' src={company3} alt='' />
        <img className='w-44  mr-14' src={company4} alt='' />
        <img className='w-44  mr-14' src={company5} alt='' />
        <img className='w-44  mr-14' src={company6} alt='' />
        <img className='w-44  mr-14' src={company7} alt='' />
        <img className='w-44  mr-14' src={company8} alt='' />
      </Marquee>
    </div>
  );
};

export default TrustedBy;
