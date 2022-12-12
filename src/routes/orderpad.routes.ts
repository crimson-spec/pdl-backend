import { Router } from 'express';

import OrderPadController from '../controllers/OrderPadController';

const orderPadRouter = Router();

// orderPadRouter.get('/:id', OrderPadController.show);
// orderPadRouter.get('/', OrderPadController.index);
orderPadRouter.post('/', OrderPadController.create);
// orderPadRouter.put('/:id', OrderPadController.update);
// orderPadRouter.delete('/:id', OrderPadController.delete);

export default orderPadRouter;
