import mongoose, { Schema } from "mongoose";


const interiorSchema = new Schema({
    image: String, 
    name:String
    
  });

 export  const interiorModel = mongoose.model('interior', interiorSchema);