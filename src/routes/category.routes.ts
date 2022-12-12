import { Router } from 'express';

import CategoryController from '../controllers/CategoryController';

const categoryRouter = Router();

categoryRouter.get('/:id', CategoryController.show);
categoryRouter.get('/', CategoryController.index);
categoryRouter.post('/', CategoryController.create);
categoryRouter.put('/:id', CategoryController.update);
categoryRouter.delete('/:id', CategoryController.delete);

export default categoryRouter;
