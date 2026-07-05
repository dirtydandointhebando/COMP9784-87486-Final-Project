import { getStatus, assignPlate } from "../services/licensePlateService.js";

export const getApiStatus = (req, res) => {
    const status = getStatus();

    res.status(200).json(status);
};

export const assignLicensePlate = async (req, res) => {

    const { vin } = req.params;

    const result = await assignPlate(vin);

    res.status(result.status).json(result);

};