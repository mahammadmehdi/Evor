import mongoose, { Schema } from "mongoose";


const sliderSchema = new Schema({
    image: String, 
    
   
  });

 export  const sliderModel = mongoose.model('slider', sliderSchema);