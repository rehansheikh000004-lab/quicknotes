// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="nav">
      <div className="brand"><Link to="/">QuickNotes</Link></div>
      <div>
        {user ? (
          <>
            <span className="muted">Hi, {user.name}</span>
            <button className="btn ghost" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn ghost">Login</Link>
            <Link to="/signup" className="btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
