// src/pages/CreateNote.jsx
import { useState } from "react";
import client from "../api/axiosClient";
import { useNavigate, useLocation } from "react-router-dom";

export default function CreateNote() {
  const nav = useNavigate();
  const loc = useLocation();
  const existing = loc.state?.note || null;

  const [title, setTitle] = useState(existing?.title || "");
  const [content, setContent] = useState(existing?.content || "");
  const [color, setColor] = useState(existing?.color || "#ffffff");

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (existing) {
        await client.put(`/api/notes/${existing._id}`, { title, content, color });
      } else {
        await client.post("/api/notes", { title, content, color });
      }
      nav("/");
    } catch (err) {
      console.error("Save note:", err);
    }
  };

  return (
    <div className="center-box">
      <h2>{existing ? "Edit Note" : "Create Note"}</h2>
      <form onSubmit={submit}>
        <input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <textarea placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)} />
        <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />
        <button>{existing ? "Save" : "Create"}</button>
      </form>
    </div>
  );
}
