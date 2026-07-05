import express from "express";

import apiKeyMiddleware from "../middleware/apiKey.js";

import {
    validateVin,
    validateLicensePlate
} from "../middleware/validation.js";

import {
    getApiStatus,
    assignLicensePlate,
    revokeLicensePlate,
    verifyVinController,
    verifyLicensePlateStatus
} from "../controllers/licensePlateController.js";

const router = express.Router();

router.get("/", getApiStatus);

router.put(
    "/assign/:vin",
    apiKeyMiddleware,
    validateVin,
    assignLicensePlate
);

router.post(
    "/revoke/:vin",
    apiKeyMiddleware,
    validateVin,
    revokeLicensePlate
);

router.get(
    "/verify-vin/:vin",
    apiKeyMiddleware,
    validateVin,
    verifyVinController
);

router.get(
    "/verify-license-plate/:licensePlate",
    apiKeyMiddleware,
    validateLicensePlate,
    verifyLicensePlateStatus
);

export default router;