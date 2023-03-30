import { Pagination, Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import SliderTemplate from "../products/SliderTemplate";

export const Display = () => {
  return (
    <SliderTemplate
      classDiv="my-4"
      classSwiper="bg-gray"
      slides={1}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      children={
        <>
          <SwiperSlide>
            <img
              src="./images/logo-facebook.svg"
              alt="logo de Facebook"
              className="w-96 mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/logo-youtube.svg"
              alt="logo de Youtube"
              className="w-96 mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./images/logo-twitter.svg"
              alt="logo de Twitter"
              className="w-96 mx-auto"
            />
          </SwiperSlide>
        </>
      }
    />
  );
};
