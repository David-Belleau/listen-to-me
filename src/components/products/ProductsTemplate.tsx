import { Skeleton } from "../../shadcn/components/Skeleton";

export const ProductsTemplate = (
  products:{},
  loading: boolean,
  template: JSX.Element
) => {
  return <>{!products || loading === true ? <Skeleton /> : template}</>;
};
