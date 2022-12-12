import { Router } from 'express';

import OrderController from '../controllers/OrderController';

const orderRouter = Router();

orderRouter.post('/', OrderController.create);

export default orderRouter;
