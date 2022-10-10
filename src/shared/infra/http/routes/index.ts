import { Router } from 'express';

import categoryRouter from '@orders/infra/http/routes/category.routes';
import productRouter from '@orders/infra/http/routes/product.routes';
import orderRouter from '@orders/infra/http/routes/order.routes';
import userRouter from '@modules/admin/infra/http/routes/user.routes';
import sessionRouter from '@modules/admin/infra/http/routes/session.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/categories', categoryRouter);
routes.use('/orders', orderRouter);
routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);

/**
 * TODAS AS ROTAS
 */

export default routes;
