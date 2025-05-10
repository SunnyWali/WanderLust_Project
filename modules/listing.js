const mongoose=require("mongoose");
const listingSchema=new mongoose.Schema({
    title:{
        
    }
    description:String,
    image:String,
    price:Number,
    country:String,
    location:String
});
