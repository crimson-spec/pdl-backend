import { Router } from 'express';

import CreateSectorController from '@orders/sector/createSectorUseCase/CreateSectorController';
import ListSectorController from '@orders/sector/listSectorUseCase/ListSectorController';

const createSectorController = new CreateSectorController();
const listSectorController = new ListSectorController();

const sectorRouter = Router();

sectorRouter.post('/', createSectorController.handle);
sectorRouter.get('/', listSectorController.handle);

export default sectorRouter;
