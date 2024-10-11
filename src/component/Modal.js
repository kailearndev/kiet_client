import React from "react";

const Modal = ({ id, title, imgURL }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box flex flex-col items-center gap-4 p-4">
        <h3 className="font-bold text-lg">{title} </h3>
        <img src={imgURL} alt={imgURL} className="w-64 h-64 rounded-md" />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
