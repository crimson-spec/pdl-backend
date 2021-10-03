import { Router } from "express";

import SendOrderController from "@orders/order/sendOrderUseCase/SendOrderController";

const sendOrderController = new SendOrderController();

const orderRouter = Router();

orderRouter.post("/", sendOrderController.handle)

export default orderRouter;
