import { useContext, useEffect, useState } from "react";
import UserContext from "../../utils/context";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";
import Alert from "../../components/alert/alert";

const ConsulPage = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShow2, setIsShow2] = useState(false);

  const {
    disease_history,
    setDisease,
    current_symptomps,
    setCurrentSymptomps,
    RegisterConsul,
    success,
  } = useContext(UserContext);

  useEffect(() => {
    document.title = "Consultations";
  });

  return (
    <div>
      <Navbar />
      <div className=" container mx-auto px-16 flex flex-col py-8 h-screen">
        <div className="py-8 border border-slate-200 bg-zinc-50 shadow-md flex items-center max-h-40 px-8 my-8 w-full">
          <h1 className="text-4xl ">Request Consultations</h1>
        </div>
        {success && <Alert>{success}</Alert>}

        <div className=" flex flex-col justify-center">
          <form onSubmit={RegisterConsul}>
            <div className="flex py-4">
              <label className="pr-4" htmlFor="do">
                Do you have disease history?
              </label>
              <select
                name=""
                id="do"
                className="border border-slate-400 rounded-sm p-1"
                onChange={(e) => setIsShow(e.target.value === "yes")}
              >
                <option value="no" onClick={() => setIsShow(false)}>
                  No
                </option>
                <option value="yes">Yes, I have</option>
              </select>
            </div>
            {isShow && (
              <textarea
                name=""
                id=""
                cols="45"
                className="border border-slate-500 mt-4 p-2"
                rows="10"
                placeholder="Describe Your disease history"
                onChange={(e) => setDisease(e.target.value)}
                value={disease_history}
                autoComplete="off"
              ></textarea>
            )}
            <div className="flex py-4">
              <label className="pr-4" htmlFor="do">
                Do you have symptomps now?
              </label>
              <select
                name=""
                id="do"
                className="border border-slate-400 rounded-sm  p-1"
                onChange={(e) => setIsShow2(e.target.value === "yes")}
              >
                <option value="no" onClick={() => setIsShow2(false)}>
                  No
                </option>
                <option value="yes">Yes, I have</option>
              </select>
            </div>
            <div>
              {isShow2 && (
                <textarea
                  name=""
                  id=""
                  cols="45"
                  className="border border-slate-500 mt-4 p-2"
                  rows="10"
                  placeholder="Describe Your symptomps"
                  onChange={(e) => setCurrentSymptomps(e.target.value)}
                  value={current_symptomps}
                  autoComplete="off"
                ></textarea>
              )}
            </div>

            <button
              type="submit"
              className="py-4 px-2 bg-sky-600 text-white mt-4 rounded-md"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConsulPage;
