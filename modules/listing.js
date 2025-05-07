const mongoose=require("mongoose");
const listingSchema=new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    country:String,
    location:String
})