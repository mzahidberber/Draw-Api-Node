import './data/sequelize/database'
import "reflect-metadata";
import express from 'express';
import { drawRouter } from './api/routes/DrawRoutes';

const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.use("/",(req,rest,next)=>{
    // console.log("middleware")
    next()
})

app.use("/draw",drawRouter)

app.listen(3000,()=>{
    console.log("start app")
})