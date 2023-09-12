import {Separator} from "../products/Separator";
import {Form} from "./Form";
import getInTouch from '../../assets/images/get-in-touch.svg'

export const Contact = () => {
  return (
    <>
      <Separator children="Contactez-nous" />
      <div className="flex flex-col sm:flex-row justify-center sm:items-center lg:items-end mb-10 sm:ml-5 sm:gap-2">
        <div>
        <img
          src={getInTouch}
          alt="L'équipe fictive de Listen to me"
          className="w-auto sm:w-96 rounded"
        />
        </div>
        <Form />
      </div>
    </>
  );
};

