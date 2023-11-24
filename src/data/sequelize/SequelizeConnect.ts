import { Dialect, Sequelize } from 'sequelize'
import { development } from './config/config.json'
import { IConnect } from '../connect/IConnect'
import { logger } from '../../core/crosscuttingconcers/logging/winston/Logger'
import { Environment } from '../../core/environment/Environment'
import * as fs from 'fs';
import * as path from 'path';

export class SequelizeConnect implements IConnect{
    private _sequelize:Sequelize
    private static _instance?:SequelizeConnect

    public get sequelize() : Sequelize {
      return this._sequelize
    }
    
    private constructor(){
      this._sequelize=this.createSequelize()
    }

    public static getInstance():SequelizeConnect{
      if(this._instance == undefined){
        this._instance=new SequelizeConnect()
      }
      return this._instance
    }

    private createSequelize():Sequelize{
      
      let config:any

      if(Environment.NODE_ENV==="development"){
        config=development
      }
      
      if(Environment.NODE_ENV==="production"){
        config={
          "username": Environment.DBUSERNAME,
          "password": Environment.DBPASSWORD,
          "database": Environment.DBNAME,
          "host": Environment.DBHOST,
          "dialect": Environment.DBDIALECT,
          "logging":false
        }
      }
      
      if (!config) {
        throw new Error(`Config for environment '${Environment.NODE_ENV}' not found in config.json`);
      }
      
      return new Sequelize(
          config.database, config.username,config.password, {
              host:config.host,
              dialect:config.dialect as Dialect,
              logging:config.logging
      })
    }
    
    public dbConnect(app:()=>void): void {
      this.modelsInit()
      this.modelRelationships()
      SequelizeConnect.getInstance().sequelize
          // .sync({force:true})
          .sync()
          .then(()=>{
            logger.info(`sql database[sequelize] connected  environment : ${Environment.NODE_ENV}`)
            app()
          })
          .catch((err:any)=>{
            logger.error(`sequelize database couldnt connect : ${err}`)
          })
    }

    private modelsInit(){
      const directoryPath = path.join(__dirname, 'models')
      const files = fs.readdirSync(directoryPath)
      files.forEach(file => {
          const filePath = path.join(directoryPath, file)
          const module = require(filePath)
          if (module.initModel && typeof module.initModel === 'function') {
              module.initModel()
          }
      })
    }

    private modelRelationships(){
      const directoryPath = path.join(__dirname, 'models')
      const files = fs.readdirSync(directoryPath)
      files.forEach(file => {
          const filePath = path.join(directoryPath, file)
          const module = require(filePath)
          if (module.createReleationship && typeof module.createReleationship === 'function') {
              module.createReleationship()
          }
      })
    }
}