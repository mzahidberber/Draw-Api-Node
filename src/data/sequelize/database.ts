import { Dialect, Sequelize } from 'sequelize'
import configJson from '../sequelize/config/config.json'


const env = process.env.NODE_ENV || 'development'
const config = configJson['development']

const sequelize = new Sequelize(config.database, config.username,config.password, {
  host:config.host,
  dialect:config.dialect as Dialect,
  logging:config.logging
})
import './models/ModelsInit' // initialize models



sequelize
  // .sync({force:true})
  .sync()
  .then()
  .catch((err:any)=>{
      console.error(err)
  })



export { sequelize }