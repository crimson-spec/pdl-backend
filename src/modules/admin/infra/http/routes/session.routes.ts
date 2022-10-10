import { Router } from 'express';
import CreateAdminSessionController from '@modules/admin/session/createAdminSessionUseCase/CreateAdminSessionController';

const createAdminSessionController = new CreateAdminSessionController();

const sessionRouter = Router();

sessionRouter.post('/admin', createAdminSessionController.handle);
sessionRouter.post('/employee', createAdminSessionController.handle);

export default sessionRouter;
