import { Swiper } from "swiper/react";
import { SliderProps } from "../../utils/types";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

const SliderTemplate = ({ children }: SliderProps) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true,
        bulletActiveClass :"swiper__bullet--active"}}
        loop={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          scale: 0.8
        }}
        modules={[EffectCoverflow, Navigation,Pagination]}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SliderTemplate;
