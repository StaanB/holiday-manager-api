import express from "express";
import { v4 as uuidv4 } from "uuid";
import cors from "cors";
import { db } from "./db";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors({ origin: "https://holiday-manager.vercel.app/" }));
app.use(express.urlencoded({ extended: true }));

interface Requisition {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: string | null;
  status: string;
}

// Get all holiday plans
app.get("/requisitions", (req, res) => {
  res.json(db);
});

// Update a holiday plan
app.put("/requisitions/:id", (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((plan) => plan.id === id);

  if (index !== -1) {
    const updatedPlan: Requisition = { ...db[index], ...req.body };
    db[index] = updatedPlan;
    res.json(updatedPlan);
  } else {
    res.status(404).json({ error: "Holiday plan not found" });
  }
});

// Delete a holiday plan
app.delete("/requisitions/:id", (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((plan) => plan.id === id);

  if (index !== -1) {
    db.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Holiday plan not found" });
  }
});

// Create a new holiday plan
app.post("/requisitions", (req, res) => {
  const { title, description, date, location, participants, status } = req.body;
  const newPlan: Requisition = {
    id: uuidv4(),
    title,
    description,
    date,
    location,
    participants,
    status,
  };
  db.push(newPlan);
  res.status(201).json(newPlan);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
