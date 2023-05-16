import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { ContextProvider } from "./utils/context";
import DashboardPage from "./pages/dashboard/dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
