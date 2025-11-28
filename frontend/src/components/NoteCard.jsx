// src/components/NoteCard.jsx
export default function NoteCard({ note, onEdit }) {
  return (
    <div className="note-card" style={{ background: note.color }}>
      <div className="note-title">{note.title}</div>
      <div className="note-content">{note.content}</div>
      <div className="note-actions">
        <button onClick={() => onEdit(note)}>Edit</button>
      </div>
    </div>
  );
}
