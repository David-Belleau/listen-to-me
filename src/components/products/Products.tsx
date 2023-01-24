import { CallToActionButton, SeeAllProductsButton } from "./ProductButtons";
import SliderTemplate from "./SliderTemplate";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import Separator from "./Separator";
import {spotifyApi} from '../../apis/spotifyConfig'
import { GetMusicData, GetToken } from "../../utils/spotifyApi";
import { useEffect, useState } from "react";

const Products = () => {
  /* const [items, setItems] = useState<[]>([])
  useEffect(()=>{
   setItems(GetMusicData());
  },[]) */
  console.log('gettoken',GetToken())
  console.log('getmusicdata', GetMusicData());
  return (
    <>
      <Separator children="Artistes populaires" />
     {/*  <SliderTemplate
        classDiv="my-4 mx-6 md:mx-10"
        slides={3}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        children={
          GetMusicData().map((artist: string)=>(            
            <SwiperSlide className="bg-gray">
              <img
                src={artist}
                alt="logo de Facebook"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
  ))} */}
            {/* <SwiperSlide className="bg-gray">
              <img
                src="./images/logo-facebook.svg"
                alt="logo de Facebook"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <img
                src="./images/logo-youtube.svg"
                alt="logo de Youtube"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <img
                src="./images/logo-twitter.svg"
                alt="logo de Twitter"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <img
                src="./images/logo-instagram.svg"
                alt="logo de Instagram"
                className="w-48 mx-auto"
              />
            </SwiperSlide> */}
          
       {/*  }
      /> */}
      <Separator children="Sons du moment" />
      <SliderTemplate
        classDiv="my-4 mx-6 md:mx-10"
        slides={3}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        children={
          <>
            <SwiperSlide className="bg-gray">
              <CallToActionButton url="/:id" />
              <img
                src="./images/logo-facebook.svg"
                alt="logo de Fcaebook"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <CallToActionButton url="/:id" />
              <img
                src="./images/logo-youtube.svg"
                alt="logo de Youtube"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <CallToActionButton url="/:id" />
              <img
                src="./images/logo-twitter.svg"
                alt="logo de Twitter"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <CallToActionButton url="/:id" />
              <img
                src="./images/logo-instagram.svg"
                alt="logo de Instagram"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
          </>
        }
      />
      <SeeAllProductsButton
        url="/allTracks"
        children="Voir tous les morceaux"
      />
      <Separator children="Albums populaires" />
      <SliderTemplate
        classDiv="my-4 mx-6 md:mx-10"
        slides={3}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        children={
          <>
            <SwiperSlide className="bg-gray">
              <CallToActionButton url="/:id" />
              <img
                src="./images/logo-facebook.svg"
                alt="logo de Facebook"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <CallToActionButton url="/:id" />
              <img
                src="./images/logo-youtube.svg"
                alt="logo de Youtube"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <CallToActionButton url="/:id" />
              <img
                src="./images/logo-twitter.svg"
                alt="logo de Twitter"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="bg-gray">
              <CallToActionButton url="/:id" />
              <img
                src="./images/logo-instagram.svg"
                alt="logo de Instagram"
                className="w-48 mx-auto"
              />
            </SwiperSlide>
          </>
        }
      />
      <SeeAllProductsButton url="/allAlbums" children="Voir tous les albums" />
    </>
  );
};

export default Products;
