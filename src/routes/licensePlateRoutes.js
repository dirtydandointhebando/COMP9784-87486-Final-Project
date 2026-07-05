import express from "express";

import {
    getApiStatus,
    assignLicensePlate,
    revokeLicensePlate
} from "../controllers/licensePlateController.js";

const router = express.Router();

// Health check
router.get("/", getApiStatus);

// Assign a license plate
router.put("/assign/:vin", assignLicensePlate);

router.post("/revoke/:vin", revokeLicensePlate);

export default router;