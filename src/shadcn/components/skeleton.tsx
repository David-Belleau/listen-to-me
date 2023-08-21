import { cn } from "../lib/utils";
import React from "react";

const Template = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
};

const Skeleton = () => {
  return (
    <div className="flex justify-center space-x-4 py-4 px-1">
      <Template className="w-[50px] h-[50px] rounded-full bg-black" />
      <div className="space-y-4">
        <Template className="h-4 w-[250px] bg-black" />
        <Template className="h-4 w-[200px] bg-black" />
      </div>
    </div>
  );
};

export { Skeleton };
