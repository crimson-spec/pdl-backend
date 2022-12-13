import { Router } from 'express';

import ReportController from '../controllers/ReportController';

const reportRouter = Router();

reportRouter.get('/orders', ReportController.orders);

export default reportRouter;
