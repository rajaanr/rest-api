const Button = (props) => {
  const { children, type, className } = props;
  return (
    <div>
      <button
        className={`bg-sky-700 py-2 px-4 rounded-sm ${className}`}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
