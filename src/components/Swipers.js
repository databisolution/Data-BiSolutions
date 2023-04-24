import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Guerin from "../containers/assets/images/Guerin.PNG";
import Altis from "../containers/assets/images/altis.PNG";
import Jdc from "../containers/assets/images/jdc.PNG";
import Prefiloc from "../containers/assets/images/Prefiloc.PNG";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Swipers = () => {
  return (
    <div className="w-[300px] sm:w-[500px] md:w-[800px] mx-auto grayscale-carousel z-0 mt-[200px]">
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"2"}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      coverflowEffect={{
        rotate: 72,
        stretch: 3,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination,Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="mx-auto my-auto"src={Guerin} alt="cabinet guerin"/>
      </SwiperSlide>
      <SwiperSlide >
        <img className="mx-auto my-auto" src={Jdc} alt="jdc"/>
      </SwiperSlide>
      <SwiperSlide >
        <img className="mx-auto my-auto" src={Altis} alt="altis"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto my-auto" src={Prefiloc} alt="prefiloc"/>
      </SwiperSlide>
      
    </Swiper>
  </div>
  );
};

export default Swipers;
