const Button = ({
  children,
  onHoverClass,
  animated = false,
  className,
  ...rest
}) => {
  return (
    <button
      className={`p-2 px-6 border-[3px] border-black rounded-md font-extrabold text-xl uppercase ${
        className ?? ""
      } ${animated ? onHoverClass : "bg-red-500"}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
