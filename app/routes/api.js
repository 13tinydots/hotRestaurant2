import { Router } from "express";
import api from "../services/api.js";

const router = new Router();

// localhost:5000/api/
router.get("/", (_, res) => {
  res.send("Hello api!");
});

// api.index
router.get("/tables", async (_, res) => {
  //
  const tables = await api.index();
  res.status(200).json(tables);
});

router.get("/waitlist", async (_, res) => {
  const waitlist = await api.index("reservations");
});

export default router;
