import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.render("index", { title: "New Message", partialName: "new-message" });
});

export default router;
