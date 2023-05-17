import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/context";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { logoutHandler } = useContext(UserContext);

  const ifLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    ifLoggedIn();
  }, []);
  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-600 text-white w-screen py-4 px-[7%]">
        <div>
          <h1 className="text-2xl ">Testtt</h1>
        </div>
        <div>
          <Link className="px-3 text-xl" to="/">
            Home
          </Link>
          {!isLoggedIn ? (
            <a className="px-3 text-xl" href="/login">
              Login
            </a>
          ) : (
            <Link className="px-3 text-xl" onClick={logoutHandler}>
              Logout
            </Link>
          )}

          <Link className="px-3 text-xl" to="/dashboard">
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
