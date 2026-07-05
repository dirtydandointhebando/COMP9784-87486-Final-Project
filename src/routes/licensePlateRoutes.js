import express from "express";
import {
    getApiStatus,
    assignLicensePlate
} from "../controllers/licensePlateController.js";

const router = express.Router();

// Health check
router.get("/", getApiStatus);

// Assign a license plate
router.put("/assign/:vin", assignLicensePlate);

export default router;