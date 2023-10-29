import DataTypes from './data/dependencyresolvers/DataTypes';
import DataContainer from './data/dependencyresolvers/dataInstanceFactory.config';
import { IElementRepository } from './data/repository/abstract/IElementRepository';
import { ILayerRepository } from './data/repository/abstract/ILayerRepository';
import { IUserRepository } from './data/repository/abstract/IUserRepository';
import './data/sequelize/database'
import "reflect-metadata";





// const r = DataContainer.get<IUserRepository>(DataTypes.UserRepository)
// r.GetAllAsync().then(data => {
//     console.log(data)
// }).catch()
// // r.GetAllWithElementsAsync().then(data => {
// //     console.log(data)
// // }).catch()

// UserModel.findAll().then(e=>{
//     console.log(e)
// })


const r1 = DataContainer.get<ILayerRepository>(DataTypes.LayerRepository)
r1.GetAllWithElementsAsync().then(data => {
    console.log(data)
}).catch()


// r.GetWhereAsync({})
// r.GetByIdAsync(1)
// let e = new Element()
// e.id=4
// r.AddAsync([
//     e
// ])


// const r1= container.get<IPointRepository>(TYPES.PointRepository)
// r1.GetAllAsync().then(r=>{
//     r.forEach(p=>{
//         console.log(p)
//     })
// }).catch()


// let p=new Point()
// p.ElementId=1

// r1.AddAsync([
//     p
// ])





