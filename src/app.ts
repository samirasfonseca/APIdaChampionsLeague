
import express, { Router } from "express";


function createApp() {
const app = express()

app.use(express.json());
app.use("/api", Router);

return app;
};

export default createApp;