import express from "express";
import {
  createAgencyAndClients,
  updateClient,
  getTopClient,
} from "../controllers/agencyClient.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

// POST /api/agency-clients - Create Agency and Clients
router.post("/agency-clients", auth, createAgencyAndClients);

// PUT /api/clients/:clientId - Update Client
router.put("/clients/:clientId", auth, updateClient);

// GET /api/top-client - Get Agency and Top Client
router.get("/top-client", auth, getTopClient);

export default router;
