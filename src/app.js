import express from "express";

import helmet from "helmet";

import compression from "compression";

import licensePlateRoutes from "./routes/licensePlateRoutes.js";

const app = express();

app.use(express.json());

app.use(helmet());

app.use(compression());

app.use("/license-plates", licensePlateRoutes);

export default app;