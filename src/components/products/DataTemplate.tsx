import { ToggleWidget } from "../../utils/darkMode";
import { Skeleton } from "../loading/Skeleton";
import { DataTemplateProps } from "../../utils/types";

export const DataTemplate = ({ id, title, data }: DataTemplateProps) => {
  const { toggleWidget } = ToggleWidget();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      {id && id?.length !== 0 ? (
        <>
          <iframe
            title={`${title}-widget`}
            src={`https://widget.deezer.com/widget/${toggleWidget}/${data}/${id}`}
            className="w-11/12 m-auto h-72"
          ></iframe>
        </>
      ) : (
        <Skeleton />
      )}
    </>
  );
};
