import { SeparatorTemplate } from "../products/SeparatorTemplate";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <>
      <SeparatorTemplate children="Contactez-nous" />
      <div className="flex flex-col sm:flex-row justify-center sm:items-center lg:items-end mb-10 sm:ml-5 sm:gap-2">
        <div>
          <img
            src='/images/get-in-touch.jpg'
            alt="L'équipe fictive de Listen to me"
            className="w-11/12 m-auto sm:w-96 rounded"
          />
        </div>
        <Form />
      </div>
    </>
  );
};
