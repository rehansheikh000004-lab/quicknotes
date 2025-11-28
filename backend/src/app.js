// src/app.js
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();

app.use(express.json());

// CORS - allow exact frontend origin from env or allow all for dev
const FRONT = process.env.FRONTEND_URL || "*";
app.use(cors({ origin: FRONT, credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => res.json({ ok: true, message: "QuickNotes API" }));

export default app;
