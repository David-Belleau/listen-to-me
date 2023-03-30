import {Separator} from "../products/Separator";
import {Form} from "./Form";

export const Contact = () => {
  return (
    <>
      <Separator children="Contactez-nous" />
      <div className="flex flex-col sm:flex-row justify-center sm:items-center lg:items-end mb-10 sm:ml-5 sm:gap-2">
        <div>
        <img
          src="./images/get-in-touch.svg"
          alt="L'équipe fictive de Listen to me"
          className="w-auto sm:w-96"
        />
        </div>
        <Form />
      </div>
    </>
  );
};

