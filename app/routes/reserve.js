import { Router } from "express";
const router = new Router();
// '/reserve/'
router.get("/", (_, res) => {
  res.send("Reserve Page");
});
router.post("/", (_, res) => {
  res.send("Reserve Post");
});
// Importer can give any name
// Typically, we only export default one thing
// We don't want to include named exports
export default router;
