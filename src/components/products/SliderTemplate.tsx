import { Swiper } from "swiper/react";
import { SliderProps } from "../../utils/types";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Pagination } from "swiper";

const SliderTemplate = ({
  children,
}: SliderProps) => {
  return (
    <div className="my-4 mx-6 md:mx-10">
      <Swiper
        slidesPerView={3}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        navigation={true}
        loop={true}
        spaceBetween={30}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SliderTemplate;
