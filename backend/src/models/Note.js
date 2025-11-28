// src/models/Note.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title:    { type: String, default: "" },
  content:  { type: String, default: "" },
  color:    { type: String, default: "#ffffff" },
  pinned:   { type: Boolean, default: false },
  archived: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.Note || mongoose.model("Note", noteSchema);
