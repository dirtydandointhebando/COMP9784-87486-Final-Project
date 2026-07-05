export const validateVin = (req, res, next) => {

    const { vin } = req.params;

    const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;

    if (!vinRegex.test(vin)) {
        return res.status(400).json({
            success: false,
            message: "Invalid VIN format."
        });
    }

    next();
};

export const validateLicensePlate = (req, res, next) => {

    const { licensePlate } = req.params;

    const plateRegex = /^[A-Z]{4}[0-9]{3}$/;

    if (!plateRegex.test(licensePlate)) {
        return res.status(400).json({
            success: false,
            message: "Invalid license plate format."
        });
    }

    next();
};