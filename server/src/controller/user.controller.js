import express from "express";
//import urlModel from "../model/user.js";
import { nanoid } from "nanoid";
import urlModel from "../model/user.js";

const router = express.Router();

export const createUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const shortCode = nanoid(6);

    const url = await urlModel.create({
      originalUrl,
      shortCode,
    });

    res.json(url);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const getUrl = async (req, res) => {
  try {
    const urls = await urlModel.find().sort({ createdAt: -1 });

    res.json(urls);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export const shortUrl = async (req, res) => {
  try {
    const url = await urlModel.findOne({
      shortCode: req.params.shortCode,
    });

    if (!url) {
      return res.status(404).json({
        message: "URL Not Found",
      });
    }

    url.clicks += 1;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json(error.message);
  }
}

export default router;