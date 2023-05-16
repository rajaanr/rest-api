import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [idCard, setIdCard] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState([]);

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
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        setValidation(error.response.data);
      });
  };

  return (
    <UserContext.Provider
      value={{
        loginHandler,
        idCard,
        setIdCard,
        password,
        setPassword,
        validation,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
