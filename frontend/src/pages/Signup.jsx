// src/pages/Signup.jsx
import { useState, useContext } from "react";
import client from "../api/axiosClient";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [err,setErr] = useState("");
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await client.post("/api/auth/signup", { name, email, password });
      login(res.data.user, res.data.token);
      nav("/");
    } catch (error) {
      setErr(error.response?.data?.message || "Network error");
    }
  };

  return (
    <div className="center-box">
      <h2>Signup</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button>Create account</button>
        <p className="error">{err}</p>
      </form>
      <p>Have account? <Link to="/login">Login</Link></p>
    </div>
  );
}
