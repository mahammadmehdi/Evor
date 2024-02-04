import { sliderModel } from "../model/sliderModel.js"


export const getAllSlider = async (req, res) => {
    const slider = await sliderModel.find({})
    res.send(slider)
  } 


export const getByIdSlider = async(req, res) => {
    const {id} = req.params
    const slider = await sliderModel.findById(id)
      res.send(slider)
    }



export const createSlider = async(req, res) => {
    const {image} = req.body
    const newsliders = new sliderModel({image})
    await newsliders.save()
    res.send('Got a POST request')
  } 



export const updateByOneSlider = async (req, res) => {
    const {id}=req.params
    const {image}=req.body
    const slider = await sliderModel.findByIdAndUpdate(id, {image})
    res.send(slider)
  }


export const deleteByOneSlider = async (req, res) => {
    const {id} = req.params
    const slider = await sliderModel.findByIdAndDelete(id)
    res.send(slider)
  }
