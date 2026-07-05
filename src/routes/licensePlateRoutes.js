import express from "express";

import {
    getApiStatus,
    assignLicensePlate,
    revokeLicensePlate,
    verifyVinController,
    verifyLicensePlateStatus
} from "../controllers/licensePlateController.js";

const router = express.Router();

router.get("/", getApiStatus);

router.put("/assign/:vin", assignLicensePlate);

router.post("/revoke/:vin", revokeLicensePlate);

router.get("/verify-vin/:vin", verifyVinController);

router.get("/verify-license-plate/:licensePlate", verifyLicensePlateStatus);

export default router;