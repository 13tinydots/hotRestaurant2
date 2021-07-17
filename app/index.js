import apiRouter from ".routes/api.js";
import express from "express";
import reserveRouter from "./routes/reserve.js";

const PORT = 5000;
const app = express();

app.use("/api", apiRouter);

// For any routes ending with '/reserve' USE reserveRouter to handle the request
app.use("/reserve", reserveRouter);

// `get` is handling GET requests to the homepage directly
app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
