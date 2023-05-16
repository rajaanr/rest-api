import { useContext } from "react";
import Button from "../components/button/button";
import FormControl from "../components/formLayouts/input";
import AuthLayout from "../components/formLayouts/layout";
import Navbar from "../components/navbar/navbar";
import UserContext from "../utils/context";

const HomePage = () => {
  const { idCard, setIdCard, password, setPassword, loginHandler, validation } =
    useContext(UserContext);

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex justify-center items-center h-screen">
        <AuthLayout type="login" onSubmit={loginHandler}>
          {validation.error && (
            <span className="text-red-600">{validation.error}</span>
          )}
          <FormControl
            onChange={(e) => setIdCard(e.target.value)}
            value={idCard}
            label="ID Card Number"
          />
          {validation.id_card_number && (
            <small className="text-red-600">
              {validation.id_card_number[0]}
            </small>
          )}
          <FormControl
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            value={password}
            type="password"
          />
          {validation.password && (
            <small className="text-red-600">{validation.password[0]}</small>
          )}
          <Button className="my-3 text-white" type="submit">
            Login
          </Button>
        </AuthLayout>
      </div>
    </>
  );
};

export default HomePage;
