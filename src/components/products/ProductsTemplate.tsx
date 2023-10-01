import { ProductsTemplateProps } from "@/src/utils/types";
import { Skeleton } from "../loading/Skeleton";
import { SeparatorTemplate } from "./SeparatorTemplate";
import SwiperTemplate from "./SwiperTemplate";

export const ProductsTemplate = ({
  ariaLabel,
  heading,
  products,
  loading,
  template,
}: ProductsTemplateProps) => {
  return (
    <>
      <SeparatorTemplate children={heading} />
      {!products || loading === true ? (
        <Skeleton />
      ) : (
        <>
          <SwiperTemplate ariaLabel={`swiper-${ariaLabel}`} children={template} />
        </>
      )}
    </>
  );
};
