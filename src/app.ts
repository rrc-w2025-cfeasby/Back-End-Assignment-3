import express from "express";
import healthRoutes from "./api/v1/routes/healthRoutes";

const app = express();

app.use(express.json());

app.use("/api/v1", healthRoutes);

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;
