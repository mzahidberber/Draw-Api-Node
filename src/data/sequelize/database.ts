import { Dialect, Sequelize } from 'sequelize'
import { development } from '../sequelize/config/config.json'
import dotenv from 'dotenv'

dotenv.config()

const env = process.env.NODE_ENV

let config:any

if(env==="development"){
  config=development
}

if(env==="production"){
  config={
    "username": process.env.DBUSERNAME,
    "password": process.env.DBPASSWORD,
    "database": process.env.DBNAME,
    "host": process.env.DBHOST,
    "dialect": process.env.DBDIALECT,
    "logging":false
  }
}

if (!config) {
  throw new Error(`Config for environment '${env}' not found in config.json`);
}

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