// src/pages/Dashboard.jsx
import { useEffect, useState, useContext } from "react";
import client from "../api/axiosClient";
import NoteGrid from "../components/NoteGrid";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const nav = useNavigate();
  const { token } = useContext(AuthContext);

  async function load() {
    try {
      const res = await client.get("/api/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Load notes:", err);
    }
  }

  useEffect(() => { if (token) load(); }, [token]);

  const handleEdit = (note) => {
    nav("/create", { state: { note } });
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Your Notes</h2>
        <button onClick={() => nav("/create")}>+ Create</button>
      </div>
      <NoteGrid notes={notes} onEdit={handleEdit} />
    </div>
  );
}
