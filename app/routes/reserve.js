import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Reserve Page");
});

// Importer can give any name
// Typically,we only expot default one thing
// We don't want to include
export default router;
