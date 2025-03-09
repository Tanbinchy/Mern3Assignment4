require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cors());

// Middleware (Catching all errors globally)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong!" });
});

// Connecting mongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((error) => console.error("MongoDB connection failed: ", error));

// Basic routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// API endpoints middleware
app.use("/api/products", require("./routes/productRoutes"));

// Starting server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
