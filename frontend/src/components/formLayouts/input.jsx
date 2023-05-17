const FormControl = (props) => {
  const { label, value, onChange, type } = props;
  return (
    <div className="flex flex-col w-auto mt-4">
      <label className="" htmlFor={label}>
        {label}
      </label>
      <input
        autoComplete="off"
        id={label}
        type={type}
        className=" border-slate-500 border py-1 px-4 mt-2 mb-3 rounded-sm"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormControl;
