import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Routes backend
app.use(studentRoutes);

// Lancer serveur
app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
