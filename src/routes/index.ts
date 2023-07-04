import  { Router } from "express";
import singersRouter from "./singers";
import songsRouter from "./songs";
const baseRouter = Router();

baseRouter.use('/singers',singersRouter);
baseRouter.use('/songs',songsRouter);


export default baseRouter