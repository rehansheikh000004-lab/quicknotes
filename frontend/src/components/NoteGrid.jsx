// src/components/NoteGrid.jsx
import NoteCard from "./NoteCard";
export default function NoteGrid({ notes, onEdit }) {
  if (!notes.length) return <p className="muted">No notes yet</p>;
  return (
    <div className="grid">
      {notes.map(n => <NoteCard key={n._id} note={n} onEdit={onEdit} />)}
    </div>
  );
}
