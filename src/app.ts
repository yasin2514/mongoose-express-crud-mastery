import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// parser--
app.use(express.json());
app.use(cors());

const getAController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Hello, Server is Working Fine",
  });
};
app.get("/", getAController);

export default app;
