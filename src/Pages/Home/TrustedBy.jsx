import company1 from "../../assets/Images/Trusted Company/Messe_Frankfurt_logo.svg";
import company2 from "../../assets/Images/Trusted Company/housingwire-logo.png";
import company3 from "../../assets/Images/Trusted Company/pennsylvania-penn-vector-logo.svg";
import company4 from "../../assets/Images/Trusted Company/PRSA-logo.png";
import company5 from "../../assets/Images/Trusted Company/United_Nations_logo.svg";
import company6 from "../../assets/Images/Trusted Company/Vodafone_logo.svg";
import company7 from "../../assets/Images/usarugby.png";
import company8 from "../../assets/Images/twitch-rivals.png";

import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  return (
    <div className='bg-base-300 py-10 space-y-3'>
      <p className='text-center text-[#717171] uppercase tracking-[2px] font-medium'>
        Trusted by the world's biggest brands
      </p>
      <Marquee>
        <img className='w-40  mr-16' src={company1} alt='' />
        <img className='w-40  mr-16' src={company2} alt='' />
        <img className='w-40  mr-16' src={company3} alt='' />
        <img className='w-40  mr-16' src={company4} alt='' />
        <img className='w-40  mr-16' src={company5} alt='' />
        <img className='w-40  mr-16' src={company6} alt='' />
        <img className='w-40  mr-16' src={company7} alt='' />
        <img className='w-40  mr-16' src={company8} alt='' />
      </Marquee>
    </div>
  );
};

export default TrustedBy;
