import express from "express"
import urlModel from "../model/user.js"


export const createUrl = async(req,res)=>{
try {
    const data = req.body
   const url = await urlModel.create(data)
      return res.json({sucess:"true", message:"url fetch sucessfully"})
    
} catch (error) {
    console.log(error.message)
      return res.json({sucess:"false", message:"url not fetched"})
}
}
export const getUrl = async(req,res)=>{
try {
    const data = req.body
   const url = await urlModel.find(data)
    return res.json({sucess:"true", message:"url fetch sucessfully"})
} catch (error) {
      console.log(error.message)
    return res.json({sucess:"false", message:"url not fetched"})
}
}

