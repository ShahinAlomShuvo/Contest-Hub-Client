import bgImg from "../../assets/Images/bg-2.jpg";
import feature from "../../assets/Images/features.webp";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const MyTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bgImg}
        bgImageAlt='Parallax img'
        strength={-200}
      >
        <div className='container mx-auto grid md:grid-cols-3 gap-10 py-10 px-6 xl:px-0'>
          <div className='text-white md:col-span-2 flex flex-col justify-center space-y-4'>
            <h2 className='text-4xl font-bold'>
              <Typewriter
                words={[
                  "Be loved by the players in your league. ",
                  " Be friendly with your team member.",
                ]}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h2>
            <p>
              Create and customize teams and players. Get access to many
              personalized statistics for socces, basketball, cricket, League of
              Leagends, Call of Duty, Fortnite, Counter Strike and many other
              sports and games. Find out who is the best!
            </p>
          </div>
          <div data-aos='zoom-in'>
            <img className='w-full' src={feature} alt='' />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MyTeam;
