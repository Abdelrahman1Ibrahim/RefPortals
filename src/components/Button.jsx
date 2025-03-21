function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-600 mt-4 p-3 rounded-md text-stone-400 hover:text-stone-500 transition-all duration-200 "
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
