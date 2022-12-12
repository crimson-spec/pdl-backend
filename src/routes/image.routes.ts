import { Router } from 'express';
import ImageController from '../controllers/ImageController';

const imageRouter = Router();

imageRouter.get('/:id', ImageController.product);

export default imageRouter;
