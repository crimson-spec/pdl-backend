import { Router } from 'express';

import categoryRouter from './category.routes';
import productRouter from './product.routes';
import orderRouter from './order.routes';
import userRouter from './user.routes';
import sessionRouter from './session.routes';
import sectorRouter from './sector.routes';
import tableRouter from './table.routes';
import imageRouter from './image.routes';
import { ensureAuthMiddleware } from '../middlewares/auth';

const routes = Router();

routes.use('/sessions', sessionRouter);
routes.use(ensureAuthMiddleware);
routes.use('/images', imageRouter);
routes.use('/products', productRouter);
routes.use('/categories', categoryRouter);
routes.use('/orders', orderRouter);
routes.use('/users', userRouter);
routes.use('/sectors', sectorRouter);
routes.use('/tables', tableRouter);

/**
 * TODAS AS ROTAS
 */

export { routes };
