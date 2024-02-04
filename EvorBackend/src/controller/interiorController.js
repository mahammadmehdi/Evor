import { interiorModel } from "../model/interiorModel.js"


export const getAllInterior= async (req, res) => {
    const interior= await interiorModel.find({})
    res.send(interior)
  } 


export const getByIdInterior= async(req, res) => {
    const {id} = req.params
    const interior= await interiorModel.findById(id)
      res.send(interior)
    }



export const createInterior= async(req, res) => {
    const {image,name} = req.body
    const newinteriors = new interiorModel({image,name})
    await newinteriors.save()
    res.send('Got a POST request')
  } 



export const updateByOneInterior= async (req, res) => {
    const {id}=req.params
    const {image,name}=req.body
    const interior= await interiorModel.findByIdAndUpdate(id, {image,name})
    res.send(interior)
  }


export const deleteByOneInterior= async (req, res) => {
    const {id} = req.params
    const interior= await interiorModel.findByIdAndDelete(id)
    res.send(interior)
  }
