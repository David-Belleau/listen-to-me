import { Skeleton } from "../../shadcn/components/skeleton";

export const ProductsTemplate = (
  products:{},
  loading: boolean,
  template: JSX.Element
) => {
  return <>{!products || loading === true ? <Skeleton /> : template}</>;
};
