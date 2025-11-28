// src/controllers/noteController.js
import Note from "../models/Note.js";

export async function listNotes(req, res) {
  try {
    const notes = await Note.find({ userId: req.userId }).sort({ updatedAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error("List notes error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content, color } = req.body;
    const note = await Note.create({ userId: req.userId, title, content, color });
    res.status(201).json(note);
  } catch (err) {
    console.error("Create note error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { id } = req.params;
    const updated = await Note.findOneAndUpdate({ _id: id, userId: req.userId }, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Not found" });
    res.json(updated);
  } catch (err) {
    console.error("Update note error:", err);
    res.status(500).json({ message: "Server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Note.findOneAndDelete({ _id: id, userId: req.userId });
    if (!deleted) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error("Delete note error:", err);
    res.status(500).json({ message: "Server error" });
  }
}
