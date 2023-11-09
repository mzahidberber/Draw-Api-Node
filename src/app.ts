import './data/sequelize/database'
import "reflect-metadata";
import express from 'express';
import { drawRouter } from './api/routes/DrawRoutes';
import { DataContainer } from './data/dependencyresolvers/dataInstanceFactory.config';
import { IElementRepository } from './data/repository/abstract/IElementRepository';
import { DataTypes } from './data/dependencyresolvers/DataTypes';
import { ServiceContainer, ServiceTypes } from './business/dependencyresolvers/serviceInstanceFactory.config';
import { IElementService } from './business/abstract/IElementService';
import ElementModel from './data/sequelize/models/ElementModel';
import LayerModel from './data/sequelize/models/LayerModel';
import DrawModel from './data/sequelize/models/DrawModel';
import { ElementDTO } from './core/dtos/concrete/ElementDTO';
import { LayerDTO } from './core/dtos/concrete/LayerDTO';
import { Draw } from './core/models/concrete/Draw';
import { DrawDTO } from './core/dtos/concrete/DrawDTO';
import { FindOptions } from 'sequelize';
import { AutorizeUser } from './api/jwt/AutorizeUser';

declare global {
    namespace Express {
      interface Request {
        user:AutorizeUser
      }
    }
  }

const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.use("/",(req,rest,next)=>{
    req.user =new AutorizeUser()
    next()
})

app.use("/draw",drawRouter)

app.listen(3000,()=>{
    console.log("start app")
})





// const ser=ServiceContainer.get<IElementService>(ServiceTypes.IElementService)
// ser.GetWhereAsync("a",{}).then(r=>{
//   console.log("r",r)
// })

// ElementModel.findAll({where:{Layer:{Draw:{UserId:"a"}}}}).then(e=>{
//   console.log(e)
// })
// class abc{
//   name?:string
// }
// function filter(checkUserIds:((x:ElementDTO)=>boolean)){
//     console.log(checkUserIds(new ElementDTO()))
// }

// function name(params:FindOptions<ElementDTO>) {
//     params.where={
      
//     }
// }

// filter((x)=>{
//   x.Id=1
//   x.LayerId=2
//   x.Layer=new LayerDTO()
//   x.Layer.Draw=new DrawDTO()
//   x.Layer.Draw.UserId="asd"
//   console.log(x)
//   return x.Layer.Draw.UserId=="asd" && (x.LayerId==2 || x.PenId==1)
// })

// function test(filter:((x:ElementDTO)=>boolean)) {
//   ElementModel.findAll().then(e=>{
//     for (let i = 0; i < e.length; i++) {
//       const element = e[i];
//       // console.log(element)
//     }
//   })
// }


// const repo=DataContainer.get<IElementRepository>(DataTypes.IElementRepository)
// repo.GetWhereAsync("a",{}).then(r=>{
//   console.log(r)
// })


// ElementModel.findAll({paranoid:true,include:[{
//   model:LayerModel,
//   include:[{
//     model:DrawModel,
//     where:{UserId:"h"},
//     attributes:[]
//   }],
//   attributes:["Id"]
// }]}).then(e=>{
//   for (let i = 0; i < e.length; i++) {
//     const element = e[i];
//     if (element.Layer)
//       console.log(element)
//   }
// })