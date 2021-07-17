import express from "express";
import apiRouter from "./routes/api.js";
import reserveRouter from "./routes/reserve.js";

const PORT = 5000;
const app = express();

app.use("/api", apiRouter);

// make sure this tool is above any request
app.use(express.json());

// For any routes ending with '/reserve' USE reserveRouter to handle the request
app.use("/reserve", reserveRouter);

// allow express to receive incoming JSON body request

// `get` is handling GET requests to the homepage directly
app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
