import { Router } from "express";
import { getHealth } from "../controllers/healthController";

const router = Router();

// GET /api/v1/health - Health check endpoint
router.get("/health", getHealth);

export default router;