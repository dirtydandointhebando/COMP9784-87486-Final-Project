import express from "express";

import licensePlateRoutes from "./routes/licensePlateRoutes.js";

const app = express();

app.use(express.json());

app.use("/license-plates", licensePlateRoutes);

export default app;