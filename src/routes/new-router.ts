import { Router } from "express";
import { getNewMessagePage } from "../controllers/new-controller";

const router = Router();
router.get("/", getNewMessagePage);

export default router;
