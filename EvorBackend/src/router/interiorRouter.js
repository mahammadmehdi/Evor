import { Router } from "express";
import { myLogger } from "../middleware/loggerMiddleWare.js";
import { createInterior, deleteByOneInterior, getAllInterior, getByIdInterior, updateByOneInterior } from "../controller/interiorController.js";
export const interiorRouter = Router();



interiorRouter.get('/interior',myLogger,getAllInterior)
interiorRouter.get('/interior/:id',getByIdInterior)
interiorRouter.post('/interior',createInterior)
interiorRouter.put('/interior/:id',updateByOneInterior)
interiorRouter.delete('/interior/:id',deleteByOneInterior)