import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { type, children, onSubmit } = props;
  return (
    <div className="max-w-xs border flex flex-col justify-center  border-slate-200 px-6 py-4 rounded-md shadow-md ">
      <form action="" onSubmit={onSubmit}>
        <div className="py-6">
          <h1 className="text-2xl text-teal-400 py-2 font-semibold ">
            {type == "login" && "Login"}
            {type == "register" && "Register"}
          </h1>
          <p>
            {type == "login" && "Login with your account"}
            {type == "register" && "Register with your account"}
          </p>
        </div>
        {children}
        <div>
          {type == "login" && (
            <>
              <span> Dont have an account? </span>{" "}
              <Link className="text-sky-700" to={"/register"}>
                Register Now
              </Link>{" "}
            </>
          )}
          {type == "Register" && (
            <>
              <span> Already have an account? </span>{" "}
              <Link className="text-sky-700" to={"/login"}>
                Login Now
              </Link>{" "}
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthLayout;
