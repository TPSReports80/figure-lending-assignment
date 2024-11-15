import express from "express";
import data from "./data.json";

const app = express();

app.get("/api/v1/applications", (_, res) => {
  res.json({ applications: data });
});

app.listen(8888, () => console.log("Server is running on port 8888"));
