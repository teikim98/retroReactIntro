import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper';
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Ddat from "./img/Ddat.png"
import Racoon from "./img/Raccon.webp"



  

const SwiperSec = () => {

    useEffect(() => {
        AOS.init();
      })


    return (
        <Swiper
      loop = "true"
      spaceBetween={50}
      autoplay={{ delay: 2500 }}
      modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      centeredSlides = "true"
      breakpoints={{
        768: {
          slidesPerView: 1
        },
      }}
    >
      <SwiperSlide><img style = {{height : "400px"}} src={Racoon} alt="" /></SwiperSlide>
      <SwiperSlide><img src={Ddat} alt="" /></SwiperSlide>
      <SwiperSlide className=''>
            <div style={{width : "1000px" , height : "400px"}} className = "bg-warning">
            </div>
    </SwiperSlide>
      <SwiperSlide><img src={Ddat} alt="" /></SwiperSlide>
      <SwiperSlide><img style = {{height : "400px"}} src={Racoon} alt="" /></SwiperSlide>
      
    </Swiper>
    );
  };

  export default SwiperSec;