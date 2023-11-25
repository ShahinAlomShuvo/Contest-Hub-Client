import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";

const BestContestCreator = () => {
  return (
    <div className='container mx-auto'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          autoplay: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='flex gap-10'>
            <img
              className='w-80'
              src='https://swiperjs.com/demos/images/nature-1.jpg'
            />
            <div className='pr-16'>
              <h2 className='text-3xl'>Name: Shahin ALom Shuvo</h2>
              <p>
                Gaming Contest Gaming ContestGaming ContestGaming ContestGaming
                ContestGaming ContestGaming ContestGaming ContestGaming
                ContestGaming ContestGaming ContestGaming ContestGaming
                ContestGaming ContestGaming ContestGaming ContestGaming
                ContestGaming ContestGaming ContestGaming ContestGaming
                ContestGaming Contest
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='h-80 w-full'
            src='https://swiperjs.com/demos/images/nature-2.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='w-80'
            src='https://swiperjs.com/demos/images/nature-3.jpg'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestContestCreator;
