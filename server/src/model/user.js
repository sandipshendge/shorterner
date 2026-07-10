import express from "express"
import mongoose  from "mongoose"
const userModel = new mongoose.Schema( {
url:{
    type:String,
    required:true,
    trim:true,
},
},{
    timestamps:true
});
const urlModel = mongoose.model("url",userModel)
export default urlModel;
