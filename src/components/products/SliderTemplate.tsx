import { Swiper } from "swiper/react";
import { SliderProps } from "../../utils/types/components";
import "swiper/css/pagination";
import "swiper/css";

const SliderTemplate = ({
  classDiv,
  slides,
  pagination,
  modules,
  classSwiper,
  children,
}: SliderProps) => {
  return (
    <div className={classDiv}>
      <Swiper
        slidesPerView={slides}
        pagination={pagination}
        modules={modules}
        className={classSwiper}
        navigation={true}
        loop={true}
        spaceBetween={30}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default SliderTemplate