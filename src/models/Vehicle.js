import mongoose from "mongoose";
import { VEHICLE_STATUS } from "../constants/vehicleStatus.js";

const vehicleSchema = new mongoose.Schema({
    vin: {
        type: String,
        required: true,
        unique: true
    },

    licensePlate: {
        type: String,
        default: null
    },

    status: {
        type: String,
        enum: Object.values(VEHICLE_STATUS),
        default: VEHICLE_STATUS.UNASSIGNED
    },

    assignedAt: {
        type: Date,
        default: null
    }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;