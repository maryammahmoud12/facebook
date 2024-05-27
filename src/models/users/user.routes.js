import { Router } from "express";
import * as UC from "./user.controller.js";

const router = Router();

router.get("/", UC.getUser);

router.post("/regression", UC.regression);
router.post("/login", UC.login);
router.post("/logout", UC.logout);

export default router;
