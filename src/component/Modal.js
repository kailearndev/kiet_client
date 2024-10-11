import React from "react";
import Lottie from "lottie-react";
import file from "./animation.json"
const Modal = ({ id, title, imgURL }) => {
  return (
    <dialog id={id} className="modal ">
      <div className="modal-box bg-white text-black  sm:modal-middle flex flex-col items-center gap-4 p-4">
        <h3 className="font-bold text-lg">{title} </h3>
        <div className="flex  items-center justify-center  gap-4">
          <img src={imgURL} alt={imgURL} className=" rounded-md aspect-[1/1] w-1/2" />
          <Lottie animationData={file} loop={true} className="w-1/3 " speed={5} />
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
