import express from "express";
import { getUsers, getBalance, transferMoney, getStatement } from "../controllers/accountController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/users", authMiddleware, getUsers);
router.get("/balance", authMiddleware, getBalance);
router.post("/transfer", authMiddleware, transferMoney);
router.get("/statement", authMiddleware, getStatement);

export default router;