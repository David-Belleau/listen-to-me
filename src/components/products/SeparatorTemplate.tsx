import { ToggleBg } from "../../utils/darkMode";
import { SeparatorTemplateProps } from "../../utils/types";

export const SeparatorTemplate = ({ children }: SeparatorTemplateProps) => {
  const { toggleBg } = ToggleBg();

  return (
    <div className="relative h-1 bg-orange my-10 text-base sm:text-xl text-center">
      <h2
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 ${toggleBg}`}
      >
        {children}
      </h2>
    </div>
  );
};
