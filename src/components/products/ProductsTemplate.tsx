import { Skeleton } from "../loading/Skeleton";

export const ProductsTemplate = (
  products:{},
  loading: boolean,
  template: JSX.Element
) => {
  return <>{!products || loading === true ? <Skeleton /> : template}</>;
};
