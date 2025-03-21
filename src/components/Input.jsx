import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, type }, ref) {
  let CssClasses =
    "w-full bg-stone-300 text-stone-500 border-b-2 border-b-stone-300 p-2 rounded-md mt-2 transition-all duration-200 focus:border-stone-500 outline-none";
  if (type === "textarea") {
    CssClasses += " resize-none h-[42]";
  }
  return (
    <p className="mb-[20px]">
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea className={CssClasses} ref={ref} />
      ) : (
        <input type={type} className={CssClasses} ref={ref} />
      )}
    </p>
  );
});

export default Input;
