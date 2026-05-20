require("dotenv").config();

const connectDB = require("./config/db");


const express=require("express");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{

   res.send("API funcionando");

});
connectDB();
app.listen(5000,()=>{

   console.log("Servidor iniciado en puerto 5000");

});
