import express from "express";
import { getAllLaws, getLawById } from "../controllers/lawsController.js";

const router = express.Router();

router.get("/", getAllLaws);
router.get("/:id", getLawById);

export default router;
