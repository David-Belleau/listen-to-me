import { Swiper } from "swiper/react";
import { SliderProps } from "../../utils/types";
import "swiper/css/pagination";
import "swiper/css";

const SliderTemplate = (props: SliderProps) => {
  return (
    <div className={props.classDiv}>
      <Swiper
        slidesPerView={props.slides}
        pagination={props.pagination}
        modules={props.modules}
        className={props.classSwiper}
        navigation={true}
        loop={true}
        spaceBetween={30}
      >
        {props.children}
      </Swiper>
    </div>
  );
};

export default SliderTemplate;
