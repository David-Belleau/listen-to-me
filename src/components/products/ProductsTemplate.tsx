import { ProductsTemplateProps } from "@/src/utils/types";
import { Skeleton } from "../loading/Skeleton";
import { SeparatorTemplate } from "./SeparatorTemplate";
import SliderTemplate from "./SliderTemplate";

export const ProductsTemplate = ({
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
          <SliderTemplate children={template} />
        </>
      )}
    </>
  );
};
