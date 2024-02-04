import mongoose, { Schema } from "mongoose";


const storeSchema = new Schema({
    image: String, 
    
  });

 export  const storeModel = mongoose.model('store', storeSchema);