import { Router } from "express";
import { createProducts, deleteByOne, getAllProducts, getByIdProducts, updateByOne } from "../controller/productController.js";
import { myLogger } from "../middleware/loggerMiddleWare.js";
export const productRouter = Router();



productRouter.get('/product',myLogger,getAllProducts)
productRouter.get('/product/:id',getByIdProducts)
productRouter.post('/product',createProducts)
productRouter.put('/product/:id',updateByOne)
productRouter.delete('/product/:id',deleteByOne)