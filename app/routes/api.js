import { Router } from "express";

const router = new Router();

// localhost:5000/api/
router.get("/", (_, res) => {
  res.send("Hello api!");
});

router.get("tables", (_, res) => {
  res.send("Hello Tables");
});

router.get("waitlist", (_, res) => {
  res.send("Hello waitlist");
});

export default router;
