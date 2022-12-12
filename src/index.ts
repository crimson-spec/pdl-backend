import './config';
import './database';
import './providers/container';
import { app } from './server';

app.listen(process.env.PORT, () =>
  console.log(`Server is running at port ${process.env.PORT}`)
);
