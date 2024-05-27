import { Router } from "express";
import * as CC from "./comment.controller.js";

const router = Router();

router.post("/", CC.createComment);
router.get("/", CC.getComment);
router.put("/:id", CC.updateComment);
router.delete("/:id", CC.deleteComment);
router.get("/:id/:id", CC.endPoint);

export default router;
