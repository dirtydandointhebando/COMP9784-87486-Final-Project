import express from "express";

import helmet from "helmet";

import compression from "compression";

import rateLimit from "express-rate-limit";

import licensePlateRoutes from "./routes/licensePlateRoutes.js";

const app = express();

app.use(express.json());

app.use(helmet());

app.use(compression());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

app.use(limiter);

app.use("/license-plates", licensePlateRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found."
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        message: "Internal server error."
    });
});

export default app;