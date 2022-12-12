import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { randomUUID } from 'crypto';

import ProductController from '../controllers/ProductController';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/uploads/products');
  },
  filename: (req, file, cb) => {
    cb(null, randomUUID() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const productRouter = Router();

productRouter.get('/:id', ProductController.show);
productRouter.get('/', ProductController.index);
productRouter.post('/', upload.single('image'), ProductController.create);
productRouter.put('/:id', upload.single('image'), ProductController.update);
productRouter.delete('/:id', ProductController.delete);

export default productRouter;
