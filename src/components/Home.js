import React, { useState } from "react";
import HomeCard from "./HomeCard";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = ({ topAiring }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div id="main-slider">
      <Swiper
        onSwiper={(swiper) => setSwiperRef(swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
        modules={[Autoplay]}
      >
        {topAiring.map((topAiringItem, index) => {
          return (
            <SwiperSlide key={index}>
              <HomeCard topAiringItem={topAiringItem} />
            </SwiperSlide>
          );
        })}
        <div className="slider-btns">
          <div className="swiper-button-prev" onClick={prevHandler}></div>
          <div className="swiper-button-next" onClick={nextHandler}></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Home;
