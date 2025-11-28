// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateNote from "./pages/CreateNote";
import { useContext } from "react";
import { AuthContext } from "./auth/AuthContext";
import Navbar from "./components/Navbar";

function Protected({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Protected><Dashboard/></Protected>} />
        <Route path="/create" element={<Protected><CreateNote/></Protected>} />
      </Routes>
    </>
  );
}
