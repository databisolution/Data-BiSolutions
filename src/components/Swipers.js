import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Guerin from "../containers/assets/images/Guerin.PNG";
import Altis from "../containers/assets/images/altis.PNG";
import Jdc from "../containers/assets/images/jdc.PNG";
import Prefiloc from "../containers/assets/images/Prefiloc.PNG";
import { EffectCoverflow, Autoplay } from "swiper";

const Swipers = () => {
  return (
    <div
      className="w-[300px] xm:w-[500px] md:w-[800px] mx-auto grayscale-carousel z-0 mt-[150px]"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
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
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="mx-auto my-auto hover:scale-110 transition ease-in-out delay-450 hover:-translate-y-0.1" src={Guerin} alt="cabinet guerin"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto my-auto hover:scale-110 transition ease-in-out delay-450 hover:-translate-y-0.1" src={Jdc} alt="jdc" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto my-auto hover:scale-110 transition ease-in-out delay-450 hover:-translate-y-0.1" src={Altis} alt="altis" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mx-auto my-auto hover:scale-110 transition ease-in-out delay-450 hover:-translate-y-0.1" src={Prefiloc} alt="prefiloc" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Swipers;
