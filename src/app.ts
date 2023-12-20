import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

const serverController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Course Server',
  });
};

app.get('/', serverController);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
