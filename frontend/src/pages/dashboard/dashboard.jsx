import { useContext, useEffect } from "react";
import UserContext from "../../utils/context";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { ifNotAuthenticated } = useContext(UserContext);

  useEffect(() => {
    ifNotAuthenticated();
    document.title = "Dashboard";
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" container mx-auto px-16 flex flex-col py-8 h-screen">
        <div className="py-8 border border-slate-200 bg-zinc-50 shadow-md flex items-center max-h-40 px-8 my-8 w-full">
          <h1 className="text-4xl ">Dashboard</h1>
        </div>
        <h1 className="w-full my-4">My Consultation</h1>
        <div className="w-full flex flex-wrap">
          <div className="border-slate-200 border rounded-md w-72 ">
            <h1 className="w-full bg-zinc-100 pl-4 pr-8 py-2 font-semibold">
              Consultation
            </h1>
            <button className="w-full pl-2 pr-8 py-4 text-sky-600">
              {" "}
              <Link to={"/consultations"}>+ Request Consultation</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
