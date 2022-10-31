import { ProductProps } from "../../utils/types";

const Separator = (props: ProductProps) => {
  return (
    <div className="relative h-1 bg-orange my-10 text-base sm:text-xl">
      <h2 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3">
        {props.children}
      </h2>
    </div>
  );
};

export default Separator;
