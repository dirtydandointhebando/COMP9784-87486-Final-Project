import {
    getStatus,
    assignPlate,
    revokePlate,
    verifyVin
} from "../services/licensePlateService.js";

export const getApiStatus = (req, res) => {
    const status = getStatus();

    res.status(200).json(status);
};

export const assignLicensePlate = async (req, res) => {

    const { vin } = req.params;

    const result = await assignPlate(vin);

    res.status(result.status).json(result);

};

export const revokeLicensePlate = async (req, res) => {

    const { vin } = req.params;

    const result = await revokePlate(vin);

    res.status(result.status).json(result);

};

export const verifyVinController = async (req, res) => {

    const { vin } = req.params;

    const result = await verifyVin(vin);

    res.status(result.status).json(result);

};