import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import notFound from './app/middlewares/notFoundRoute';

const app: Application = express();

app.use(express.json());
app.use(cookieParser())
app.use(cors({ origin: ['http://loaclhost:5173'] }));

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;