import { Router } from "express";
import { myLogger } from "../middleware/loggerMiddleWare.js";
import { createSlider, deleteByOneSlider, getAllSlider, getByIdSlider, updateByOneSlider } from "../controller/sliderController.js";
export const sliderRouter = Router();



sliderRouter.get('/slider',myLogger,getAllSlider)
sliderRouter.get('/slider/:id',getByIdSlider)
sliderRouter.post('/slider',createSlider)
sliderRouter.put('/slider/:id',updateByOneSlider)
sliderRouter.delete('/slider/:id',deleteByOneSlider)