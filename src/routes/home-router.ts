import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.render("index", { title: "Home", partialName: "home" });
});

export default router;
