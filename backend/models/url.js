import mongoose, { model } from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type:String, 
        required:true,
        unique:true,
    },
    redirectUrl: {
        type:String, 
        required:true,
    },
    visitHistory: [{timeStamp : {type: Number}}],
    }, 
    {timestamps:true}
);

const URL = mongoose.model("url", urlSchema);

export default URL;