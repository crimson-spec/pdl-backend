import { Router } from 'express';

import SectorController from '../controllers/SectorController';

const sectorRouter = Router();

sectorRouter.get('/:id', SectorController.show);
sectorRouter.get('/', SectorController.index);
sectorRouter.post('/', SectorController.create);
sectorRouter.put('/:id', SectorController.update);
sectorRouter.delete('/:id', SectorController.delete);

export default sectorRouter;
