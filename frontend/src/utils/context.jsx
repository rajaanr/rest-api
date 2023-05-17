import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [idCard, setIdCard] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);
  const [success, setSuccess] = useState("");
  const [disease_history, setDisease] = useState("");
  const [current_symptomps, setCurrentSymptomps] = useState("");

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const data = {
      id_card_number: idCard,
      password: password,
    };
    await axios
      .post("v1/auth/login", data)
      .then((response) => {
        console.log(response);
        window.location.href = "/dashboard";
        localStorage.setItem("token", response.data.data.token);
      })
      .catch((error) => {
        console.log(error);
        setValidation(error.response.data);
      });
  };

  const ifNotAuthenticated = () => {
    if (!token) {
      navigate("/login");
    }
  };

  const ifAuthenticated = () => {
    if (token) {
      navigate("/*");
    }
  };

  const logoutHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("v1/auth/logout", null, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        navigate("/");
        localStorage.removeItem("token");
        setSuccess(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const RegisterConsul = async (e) => {
    e.preventDefault();
    const data = {
      disease_history: disease_history,
      current_symptomps: current_symptomps,
    };
    await axios
      .post("v1/consultations", data, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setSuccess(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserContext.Provider
      value={{
        loginHandler,
        logoutHandler,
        idCard,
        setIdCard,
        password,
        setPassword,
        validation,
        ifNotAuthenticated,
        ifAuthenticated,
        success,
        disease_history,
        setDisease,
        current_symptomps,
        setCurrentSymptomps,
        RegisterConsul,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
