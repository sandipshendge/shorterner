import express from "express";
import {
  createUrl,
  getUrl,
  shortUrl,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/shorten", createUrl);
router.get("/urls", getUrl);
router.get("/:shortCode", shortUrl);

export default router;