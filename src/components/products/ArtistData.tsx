import { Header } from "../header/Header";
import { Contact } from "../contact/Contact";
import { Footer } from "../footer/Footer";
import { useGetArtistsDataQuery } from "../../services/deezerApiCalls";
import { Link, useParams } from "react-router-dom";
import { Skeleton } from "../../shadcn/components/skeleton";
import SliderTemplate from "./SliderTemplate";
import { SwiperSlide } from "swiper/react";

export const ArtistData = () => {
  let artistId = useParams();
  const { data: album, isLoading } = useGetArtistsDataQuery(artistId);
  return (
    <>
      <Header />
      {!album || isLoading === true ? (
        <Skeleton />
      ) : (
        <SliderTemplate
          children={
            <>
              {album?.data.map(
                (album: {
                  album: { title: string; cover_xl: string; id: number };
                }) => (
                  <SwiperSlide key={album.album.id}>
                    <Link to="">
                      <p className="text-center text-base sm:text-xl w-34 truncate">
                        {album.album.title}
                      </p>
                      <img
                        src={album.album.cover_xl}
                        alt={album.album.title}
                        className="w-48 mx-auto rounded"
                      />
                    </Link>
                  </SwiperSlide>
                )
              )}
            </>
          }
        />
      )}
      <Contact />
      <Footer />
    </>
  );
};
