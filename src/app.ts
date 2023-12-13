import "reflect-metadata";
import express from 'express';
import { Environment } from './core/environment/Environment';
import { DrawRouter } from './api/routes/Draw.routes';
import { AutorizeUser } from './api/jwt/AutorizeUser';
import { LayerRouter } from './api/routes/Layer.routes';
import { ElementRouter } from './api/routes/Element.routes';
import { PointRouter } from './api/routes/Point.routes';
import { RadiusRouter } from './api/routes/Radius.routes';
import { SSAngleRouter } from './api/routes/SSAngle.routes';
import { DrawLayerRouter } from './api/routes/DrawLayer.routes';
import { logger } from './core/crosscuttingconcers/logging/winston/Logger';
import { Application } from "./core/application/Application";
import { DataContainer } from "./data/dependencyresolvers/dataInstanceFactory.config";
import { ILayerRepository } from "./data/repository/abstract/ILayerRepository";
import { DataLayerTypes } from "./data/dependencyresolvers/DataTypes";
import { IDrawRepository } from "./data/repository/abstract/IDrawRepository";
import { ServiceContainer, ServiceTypes } from "./business/dependencyresolvers/serviceInstanceFactory.config";
import { ILayerService } from "./business/abstract/ILayer.service";
import { IDrawService } from "./business/abstract/IDraw.service";

declare global {
  namespace Express {
    interface Request {
      user:AutorizeUser
    }
  }
}

const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use("/",(req,rest,next)=>{
    req.user =new AutorizeUser()
    next()
})

app.use("/drawbox",new DrawRouter().router)
app.use("/layer",new LayerRouter().router)
app.use("/element",new ElementRouter().router)
app.use("/point",new PointRouter().router)
app.use("/radius",new RadiusRouter().router)
app.use("/ssangle",new SSAngleRouter().router)
app.use("/draw",new DrawLayerRouter().router)

new Application(()=>{
    app.listen(Environment.PORT,()=>{
      logger.info(`start app port: ${Environment.PORT} environment : ${Environment.NODE_ENV}`)
    })
})

// const draw=DataContainer.get<IDrawRepository>(DataLayerTypes.IDrawRepository)
// // draw.GetAllAsync("asd").then()
// const layer=ServiceContainer.get<IDrawService>(ServiceTypes.IDrawService)
// layer.GetAllAsync("asd1").then(e=>{
//   console.log(e)
// })

// layer.GetWhereAsync("fdb11409-e937-495e-9053-4d5929566b25",{Name:"l1"}).then(e=>{
//   console.log(e)
// })

// layer.GetByIdAsync("fdb11409-e937-495e-9053-4d5929566b25","6565de2d6fe98e7a54eecb09").then(e=>{
//   console.log(e)
// })

// layer.AddAllAsync("fdb11409-e937-495e-9053-4d5929566b25",[{
//   Name:"l2"
// }]).then(e=>{
//   console.log(e)
// })

// new MDrawModel({Name:"t",NumberOfLayerElements:0,UserId:"asd"})
//     .save()
//     .then(e=>{
//         console.log("save",e)
//     }).catch(err=>{
//         console.error(err)
//     })
        
// MDrawModel.find({}).then(e=>{
//     console.log(e)
// })

// new MLayerModel({Name:"l1",UserId:"asd",NumberOfElements:0,Draw:new ObjectId("65623de1d25f2f59e85fdf79"),Visibility:true,Lock:true,Thickness:1})
// .save()
//     .then(e=>{
//         console.log("save",e)
//     }).catch(err=>{
//         console.error(err)
//     })





// MLayerModel.find({}).populate("Draw").then(e=>{
//   console.log(e[0])
// })



