import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { ContextProvider } from "./utils/context";
import DashboardPage from "./pages/dashboard/dashboard";
import LoginPage from "./pages/auth/login";
import ErrorPage from "./pages/errorPage/error";
import ConsulPage from "./pages/consultations/request";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/consultations" element={<ConsulPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
