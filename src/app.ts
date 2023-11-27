import express, { Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './modules/users/user.route';
const app = express();

// parser--
app.use(express.json());
app.use(cors());

// user router controller
app.use('/api/users', UserRoutes);

// normal  controller just show
const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Hello, Server is Working Fine',
  });
};
app.get('/', getAController);

export default app;
