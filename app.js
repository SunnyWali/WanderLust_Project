const express=require("express");
const app=express();
const mongoose=require("mongoose");


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust_Project");
}
main().then(()=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log(err);
})

app.get("/",(req,res)=>{
    res.send("Root level");
});
app.listen(8080,()=>{
    console.log("Server is listening to the port no 8080");
});

