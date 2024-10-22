import express from "express";
import {
  createAgencyAndClients,
  updateClient,
  getTopClient,
} from "../controllers/agencyClient.controller.js";
import auth from "../middleware/auth.middleware.js";
import { controllerForGeneratingJWT } from "../controllers/auth.controller.js";

const router = express.Router();

// Create Agency and Clients
router.post("/agency-clients", auth, createAgencyAndClients);

// Update Client
router.put("/clients/:clientId", auth, updateClient);

// Get Agency and Top Client
router.get("/top-client", auth, getTopClient);

//Get AccessToken to be includede in Headers for easy access to api's
router.get("/get-accessToken", controllerForGeneratingJWT);

export default router;
