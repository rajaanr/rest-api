const Alert = ({ children }) => {
  return (
    <div className="w-[80%] mb-8 bg-green-200 border relative border-green-500 rounded-md py-4 px-8">
      <span
        className=" absolute top-0 text-xl cursor-pointer right-3"
        onClick={(e) => (e.target.parentElement.style.display = "none")}
      >
        x
      </span>
      {children}
    </div>
  );
};

export default Alert;
