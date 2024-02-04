import { Router } from "express";
import { myLogger } from "../middleware/loggerMiddleWare.js";
import { createStore, deleteByOneStore, getAllStore, getByIdStore, updateByOneStore } from "../controller/storeController.js";
export const storeRouter = Router();



storeRouter.get('/store',myLogger,getAllStore)
storeRouter.get('/store/:id',getByIdStore)
storeRouter.post('/store',createStore)
storeRouter.put('/store/:id',updateByOneStore)
storeRouter.delete('/store/:id',deleteByOneStore)