import { createPortal } from "react-dom";
import { useRef, useImperativeHandle } from "react";

function Modal({ ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  }));
  return createPortal(
    <dialog
      className="p-[20px] bg-stone-100 backdrop:bg-stone-900/[0.9]"
      ref={dialog}
    >
      <p className="text-stone-600">Invalid Input</p>
      <p className="text-stone-300 mt-[20px]">
        Oops .... looks like you forgot to enter a value
      </p>
      <p className="text-stone-300 my-[20px]">
        Please make sure you provide a vaild value for every input field
      </p>
      <form method="dialog">
        <button className="text-stone-800  hover:text-stone-600 transition-all duration-200">
          Okay
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
