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

export default app;