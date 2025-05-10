const mongoose=require("mongoose");
const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        set:(v) => v=== "" ? "default link" :v,
    },
    image:String,
    price:Number,
    country:String,
    location:String
});
