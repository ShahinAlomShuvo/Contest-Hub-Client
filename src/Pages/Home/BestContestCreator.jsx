import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* import clientOne from "../../assets/Images/1.jpg";
import clientTwo from "../../assets/Images/2.jpg";
import clientThree from "../../assets/Images/3.jpg";
import clientBg from "../../assets/Images/gucciBrand.webp"; */

const ClientReviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='text-center'>
      <div
        className='hero h-[70vh]'
        style={{
          backgroundImage: `url(${clientBg})`,
        }}
      >
        <div className='hero-overlay bg-[#554C86] bg-opacity-80 overflow-hidden'>
          <h2 className='text-3xl text-white font-bold text-center pt-16 pb-10'>
            Clients About Us
          </h2>
          <Slider {...settings}>
            <div className='text-white'>
              <img
                className='w-28 h-28 rounded-full mx-auto'
                src={clientOne}
                alt='client'
              />
              <h4 className='text-3xl  font-semibold py-3'>Jenna Anniston</h4>
              <p className='w-[380px] md:w-[450px] mx-auto'>
                The quality of ShopNThread products never ceases to amaze me. A
                perfect blend of style and durability!
              </p>
            </div>
            <div className='text-white'>
              <img
                className='w-28 h-28 rounded-full mx-auto'
                src={clientTwo}
                alt='client'
              />
              <h4 className='text-3xl  font-semibold py-3'>Mary Green </h4>
              <p className='w-[380px] md:w-[450px] mx-auto'>
                I'm hooked on ShopNThread their products are worth every penny.
                Quality that speaks for itself.
              </p>
            </div>
            <div className='text-white'>
              <img
                className='w-28 h-28 rounded-full mx-auto'
                src={clientThree}
                alt='client'
              />
              <h4 className='text-3xl  font-semibold py-3'>Lucy Banks</h4>
              <p className='w-[380px] md:w-[450px] mx-auto'>
                Kudos to ShopNThread for their inventive designs. Practicality
                meets elegance, a winning combination.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
