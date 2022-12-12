import { Router } from 'express';
import SessionController from '../controllers/SessionController';

const sessionRouter = Router();

sessionRouter.post('/admin', SessionController.admin);
sessionRouter.post('/waiter', SessionController.waiter);

export default sessionRouter;
