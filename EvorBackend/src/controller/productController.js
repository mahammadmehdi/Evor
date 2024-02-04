import { productModel } from "../model/productModel.js"



export const getAllProducts = async (req, res) => {
    const product = await productModel.find({})
    res.send(product)
  } 


export const getByIdProducts = async(req, res) => {
    const {id} = req.params
    const product = await productModel.findById(id)
      res.send(product)
    }



export const createProducts = async(req, res) => {
    const {image, name, price} = req.body
    const newProducts = new productModel({image, name, price})
    await newProducts.save()
    res.send('Got a POST request')
  } 



export const updateByOne = async (req, res) => {
    const {id}=req.params
    const {image, name, price}=req.body
    const product = await productModel.findByIdAndUpdate(id, {image, name, price})
    res.send(product)
  }


export const deleteByOne = async (req, res) => {
    const {id} = req.params
    const product = await productModel.findByIdAndDelete(id)
    res.send(product)
  }
