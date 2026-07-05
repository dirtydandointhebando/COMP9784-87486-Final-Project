import dotenv from "dotenv";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import Vehicle from "../models/Vehicle.js";
import { VEHICLE_STATUS } from "../constants/vehicleStatus.js";

dotenv.config();

const vehicles = [
    {
        vin: "1HGCM82633A123456",
        licensePlate: null,
        status: VEHICLE_STATUS.UNASSIGNED
    },
    {
        vin: "2HGCM82633A123457",
        licensePlate: null,
        status: VEHICLE_STATUS.UNASSIGNED
    },
    {
        vin: "3HGCM82633A123458",
        licensePlate: null,
        status: VEHICLE_STATUS.UNASSIGNED
    },
    {
        vin: "4HGCM82633A123459",
        licensePlate: null,
        status: VEHICLE_STATUS.UNASSIGNED
    },
    {
        vin: "5HGCM82633A123460",
        licensePlate: null,
        status: VEHICLE_STATUS.UNASSIGNED
    }
];

try {
    await connectDB();

    await Vehicle.deleteMany({});

    await Vehicle.insertMany(vehicles);

    console.log("✅ Vehicles seeded successfully.");

} catch (error) {

    console.error("❌ Error seeding database:", error);

} finally {

    await mongoose.connection.close();

}