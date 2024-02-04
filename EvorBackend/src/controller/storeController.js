import { storeModel } from "../model/storeModel.js"


export const getAllStore= async (req, res) => {
    const store= await storeModel.find({})
    res.send(store)
  } 


export const getByIdStore= async(req, res) => {
    const {id} = req.params
    const store= await storeModel.findById(id)
      res.send(store)
    }



export const createStore= async(req, res) => {
    const {image} = req.body
    const newstores = new storeModel({image})
    await newstores.save()
    res.send('Got a POST request')
  } 



export const updateByOneStore= async (req, res) => {
    const {id}=req.params
    const {image}=req.body
    const store= await storeModel.findByIdAndUpdate(id, {image})
    res.send(store)
  }


export const deleteByOneStore= async (req, res) => {
    const {id} = req.params
    const store= await storeModel.findByIdAndDelete(id)
    res.send(store)
  }
