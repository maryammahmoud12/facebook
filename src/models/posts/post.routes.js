import { Router } from "express";
import * as PC from "./post.controller.js";

const router = Router();

router.post("/", PC.createPost);
router.get("/", PC.getPost);
router.put("/:id", PC.updatePost);
router.delete("/:id", PC.deletePost);
router.get("/:id", PC.postWithAuther);

export default router;
