import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Risque from "../containers/assets/images/Risque financier et recouvrement.png"
import Ressources from "../containers/assets/images/RESSOURCES HUMAINE MASSE SAL.png"
import Details from "../containers/assets/images/détail des charges.png"
import Fiche from "../containers/assets/images/Fiche salarié.png"
import Rapport from "../containers/assets/images/Rapport Frais du personnel.png"


const SwiperProduct = () => {
  return (
    <div className="w-[300px] xm:w-[500px] md:w-[800px] mx-auto grayscale-carousel z-0 mt-[150px] lg:hover:scale-150 transition ease-in-out delay-450 hover:-translate-y-0.2">
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"1"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      coverflowEffect={{
        rotate: 80,
        stretch: 3,
        depth: 80,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination,Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="mx-auto my-auto "src={Risque} alt="risques financier"/>
      </SwiperSlide>
      <SwiperSlide >
        <img className="mx-auto my-auto" src={Ressources} alt="ressources humaines"/>
      </SwiperSlide>
      <SwiperSlide >
        <img className="mx-auto my-auto" src={Details} alt="detail charges"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto my-auto" src={Fiche} alt="fiche salarié"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto my-auto" src={Rapport} alt="fiche salarié"/>
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default SwiperProduct