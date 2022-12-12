import 'express-async-errors';
import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import { pagination } from 'typeorm-pagination';
import { errorMiddleware } from './middlewares/errors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(pagination);
app.use(routes);

app.use(errorMiddleware);

export { app };
