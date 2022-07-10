const express=require("express");
const cors=require("cors");
const app=express();
var corsOption={
    origin :"https://localhost:8081"
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.json({message:"Welcome to express node js application."});

});
const   PORT=  process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});