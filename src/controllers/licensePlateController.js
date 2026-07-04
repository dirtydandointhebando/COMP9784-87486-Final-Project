import { getStatus } from "../services/licensePlateService.js";

export const getApiStatus = (req, res) => {
    const status = getStatus();

    res.status(200).json(status);
};