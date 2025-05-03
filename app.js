const express=require("express");
const app=express();
const mongoose=require("mongoose");


app.get("/",(req,res)=>{
    res.send("Hi i am root");
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1/WanderLust_Project");
}

main().then(()=>{
    console.log("successfully connected to the database");
}).catch((err)=>{
    console.log(err);
});
app.listen(8080,()=>{
    console.log("server is listening to port no 8080");
})


