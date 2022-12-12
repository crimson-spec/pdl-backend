import { Router } from 'express';
import TableController from '../controllers/TableController';

const tableRouter = Router();

tableRouter.get('/:id', TableController.show);
tableRouter.get('/', TableController.index);
tableRouter.post('/', TableController.create);
tableRouter.put('/:id', TableController.update);
tableRouter.delete('/:id', TableController.delete);

export default tableRouter;
