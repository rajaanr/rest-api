const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center bg-sky-600 text-white w-screen py-4 px-[7%]">
        <div>
          <h1 className="text-2xl ">Testtt</h1>
        </div>
        <div>
          <a className="px-3 text-xl" href="">
            Home
          </a>
          <a className="px-3 text-xl" href="">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
