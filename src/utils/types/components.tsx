import { SwiperModule } from "swiper/types";

export type SliderProps = {
  classDiv: string;
  classSwiper?: string;
  slides: number;
  modules: SwiperModule[];
  children: JSX.Element;
  pagination?: { clickable: boolean };
};

export type ProductProps = {
  url?: string;
  children?: string;
};

export type TokenResponseProps = {
  status: number;
  statusText: string;
};

export type MusicDataProps = {
  items: object[];
  // limit
};
