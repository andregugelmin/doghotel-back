import cors from 'cors';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler.js';
import router from './routers/index.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => res.send('Application is online'));

app.use(router);
app.use(errorHandler);
export default app;
