import Vehicle from "../models/Vehicle.js";
import { VEHICLE_STATUS } from "../constants/vehicleStatus.js";
import { getNextLicensePlate } from "../utils/licensePlateGenerator.js";

export const getStatus = () => {
    return {
        success: true,
        message: "License Plate API is running."
    };
};

export const assignPlate = async (vin) => {

    const vehicle = await Vehicle.findOne({ vin });

    if (!vehicle) {
        return {
            success: false,
            status: 404,
            message: `VIN ${vin} was not found.`
        };
    }

    if (vehicle.status === VEHICLE_STATUS.ACTIVE) {
        return {
            success: false,
            status: 409,
            message: `VIN ${vin} already has a license plate assigned.`
        };
    }

    if (vehicle.status === VEHICLE_STATUS.REVOKED) {
        return {
            success: false,
            status: 409,
            message: `VIN ${vin} has been revoked and cannot receive a new license plate.`
        };
    }

    const lastVehicle = await Vehicle.findOne({
        licensePlate: { $ne: null }
    }).sort({ licensePlate: -1 });

    const nextPlate = getNextLicensePlate(
        lastVehicle?.licensePlate ?? null
    );

    vehicle.licensePlate = nextPlate;
    vehicle.status = VEHICLE_STATUS.ACTIVE;
    vehicle.assignedAt = new Date();

    await vehicle.save();

    return {
        success: true,
        status: 200,
        message: `License Plate ${nextPlate} assigned to VIN ${vin}.`,
        vehicle
    };
};

export const revokePlate = async (vin) => {

    const vehicle = await Vehicle.findOne({ vin });

    if (!vehicle) {
        return {
            success: false,
            status: 404,
            message: `VIN ${vin} was not found.`
        };
    }

    if (vehicle.status === VEHICLE_STATUS.UNASSIGNED) {
        return {
            success: false,
            status: 409,
            message: `VIN ${vin} does not have a license plate assigned.`
        };
    }

    if (vehicle.status === VEHICLE_STATUS.REVOKED) {
        return {
            success: false,
            status: 409,
            message: `VIN ${vin} is already revoked.`
        };
    }

    vehicle.status = VEHICLE_STATUS.REVOKED;

    await vehicle.save();

    return {
        success: true,
        status: 200,
        message: `License Plate ${vehicle.licensePlate} revoked for VIN ${vin}.`,
        vehicle
    };
};

export const verifyVin = async (vin) => {

    const vehicle = await Vehicle.findOne({ vin });

    if (!vehicle) {
        return {
            success: false,
            status: 404,
            message: `VIN ${vin} was not found.`
        };
    }

    if (vehicle.status === VEHICLE_STATUS.UNASSIGNED) {
        return {
            success: true,
            status: 200,
            message: `VIN ${vin} is not assigned a license plate.`
        };
    }

    return {
        success: true,
        status: 200,
        message: `VIN ${vin} is assigned to License Plate ${vehicle.licensePlate}.`,
        vehicle
    };
};

export const verifyLicensePlate = async (licensePlate) => {

    const vehicle = await Vehicle.findOne({ licensePlate });

    if (!vehicle) {
        return {
            success: false,
            status: 404,
            message: `License Plate ${licensePlate} was not found.`
        };
    }

    return {
        success: true,
        status: 200,
        message: `License Plate ${licensePlate} belongs to VIN ${vehicle.vin}.`,
        vehicle
    };
};