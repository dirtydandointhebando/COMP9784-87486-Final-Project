import express from "express";

import helmet from "helmet";

import licensePlateRoutes from "./routes/licensePlateRoutes.js";

const app = express();

app.use(express.json());

app.use(helmet());

app.use("/license-plates", licensePlateRoutes);

export default app;