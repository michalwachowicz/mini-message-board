import { Router } from "express";
import {
  createNewMessage,
  getNewMessagePage,
} from "../controllers/new-controller";

const router = Router();

router.get("/", getNewMessagePage);
router.post("/", createNewMessage);

export default router;
