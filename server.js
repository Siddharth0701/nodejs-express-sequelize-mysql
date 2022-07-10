const express=require("express");
const cors=require("cors");
const bodyParser = require("body-parser");
const app=express();

var corsOption={
    origin :"https://localhost:8081"
};
app.use(cors(corsOption));
app.use(bodyParser.json());
//app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const db=require("./app.models");
db.sequelize.sync()
.then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.get("/",(req,res)=>{
    res.json({message:"Welcome to express node js application."});

});
const   PORT=  process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});