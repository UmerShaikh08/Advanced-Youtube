import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const ButtonList = () => {
  const Button_list = [
    "All",
    "Music",
    "Bollywood",
    "Live",
    "Gaming",
    "Comedy",
    "Recently",
    "Bgmi",
    "New ",
  ];

  return (
    <Swiper
      // for fix lazy scroll bar
      cssMode={true}
      mousewheel={{
        enabled: true,
        forceToAxis: true,
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      allowSlidePrev={true}
      slidesPerView={9}
      breakpoints={{
        300: { slidesPerView: 3, spaceBetween: 5 },
        640: { slidesPerView: 6 },
        1024: { slidesPerView: 9 },
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      spaceBetween={5}
      pagination={false}
      freeMode={true}
      rewind={false}
      centeredSlides={false}
      navigation={false}
      className="mySwiper mb-4"
      style={{
        "--swiper-navigation-size": "20px",
      }}
    >
      <div className="flex flex-col ">
        {Button_list.map((name, idx) => (
          <SwiperSlide key={idx}>
            <Button name={name} key={name} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default ButtonList;
