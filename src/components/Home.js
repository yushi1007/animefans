import React from "react";
import HomeCard from "./HomeCard";
import "swiper/css";
import "../styles/styles.css";
import "swiper/css/pagination";
import { Lazy, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = ({ topAiring }) => {
  return (
    <div id="main-slider">
      <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Lazy, Navigation]}
        className="mySwiper"
      >
        {topAiring.map((topAiringItem, index) => {
          return (
            <SwiperSlide key={index}>
              <HomeCard topAiringItem={topAiringItem} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Home;
