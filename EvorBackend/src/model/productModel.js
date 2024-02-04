import mongoose, { Schema } from "mongoose";


const productSchema = new Schema({
    image: String, 
    name: String,
    price: String,
   
  });

 export  const productModel = mongoose.model('product', productSchema);