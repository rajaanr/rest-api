import { useContext, useEffect } from "react";
import Alert from "../components/alert/alert";
import Navbar from "../components/navbar/navbar";
import UserContext from "../utils/context";

const HomePage = () => {
  const { success } = useContext(UserContext);

  useEffect(() => {
    document.title = "Homepage";
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col px-8 justify-center h-[85vh]">
        {success && <Alert>{success}</Alert>}

        <div className="max-w-lg">
          <h1 className="text-5xl shadow-black drop-shadow-xl text-sky-500 font-semibold py-4">
            Vaccination
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            accusantium cumque, esse iusto distinctio quasi at atque blanditiis
            culpa corporis quos ducimus quaerat exercitationem possimus dicta
            adipisci iste ipsam excepturi.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
