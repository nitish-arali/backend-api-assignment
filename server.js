import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import apiRoutes from "./routes/apiRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/api/v1", apiRoutes);

// app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
