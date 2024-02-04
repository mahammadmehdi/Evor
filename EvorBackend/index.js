import express from 'express';
import mongoose, { Schema } from 'mongoose';
import { productRouter } from './src/router/productRouter.js';
import { sliderRouter } from './src/router/sliderRouter.js';
import { storeRouter } from './src/router/storeRouter.js';
import { interiorRouter } from './src/router/interiorRouter.js';

const app = express()
const port = 3000
app.use(express.json())

app.use("/", productRouter)
app.use("/", sliderRouter)
app.use("/", storeRouter)
app.use("/", interiorRouter)









mongoose.connect('mongodb+srv://mahammad:mahammad@cluster0.errjuf4.mongodb.net/')
.then(() => console.log('Connected!'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})