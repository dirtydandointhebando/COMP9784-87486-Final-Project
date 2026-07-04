import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "License Plate API is running."
    });
});

export default app;

