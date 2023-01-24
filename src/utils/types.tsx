import { SwiperModule } from "swiper/types";

type SliderProps = {
  classDiv: string;
  classSwiper?: string;
  slides: number;
  modules: SwiperModule[];
  children: JSX.Element;
  pagination?: { clickable: boolean };
};

type ProductProps = {
  url?: string;
  children?: string;
};

type TokenResponseProps = {
  status: number;
  statusText: string;
};

type MusicDataProps = {
  items: object[];
  // limit
};

export type { SliderProps, ProductProps, TokenResponseProps, MusicDataProps };
