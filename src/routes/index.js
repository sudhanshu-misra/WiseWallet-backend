import express from "express";
import { userRouter } from "./user.route.js";
import { transactionRouter } from "./transaction.route.js";
import { walletRouter } from "./wallet.route.js";
import { budgetRouter } from "./budget.route.js";
import { goalRouter } from "./goal.route.js";
import { productRouter } from "./product.route.js";

const router = express.Router();

// Define your routes here
router.use("/user", userRouter);

router.use("/transaction", transactionRouter);

router.use("/wallet", walletRouter);

router.use("/budget", budgetRouter);

router.use("/goal", goalRouter);

router.use("/product",productRouter);

export default router;
