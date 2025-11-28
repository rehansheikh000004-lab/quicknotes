// server.js
import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

const PORT = process.env.PORT || 5000;

if (!process.env.MONGO_URI) {
  console.error("Missing MONGO_URI in environment");
  process.exit(1);
}

await connectDB(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`🚀 QuickNotes backend running on port ${PORT}`);
});
