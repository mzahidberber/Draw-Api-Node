import { IDrawAdminastor } from "../abstract/IDrawAdminastor"
import { DrawAdminastor } from "./DrawAdminastor"

export class DrawAdminastorMultiton{
    private static _drawAdminastors:{ [name: string]: IDrawAdminastor }={}

    private constructor(){}

    public static getDrawAdminastor(userId:string):IDrawAdminastor{
        DrawAdminastorMultiton.controlData()
        if(this._drawAdminastors[userId]==undefined){
            this._drawAdminastors[userId]=new DrawAdminastor()
        }
        return this._drawAdminastors[userId]
    }

    private static controlData(){
        let deleteList:string[]=[]
        for(let key in this._drawAdminastors){
            let adminastor=this._drawAdminastors[key]
            const date=new Date()
            if(adminastor.useTime.getHours()+1<date.getHours()){
                deleteList.push(key)
            }
        }
        deleteList.forEach(key=>{
            delete this._drawAdminastors[key]
        })
    }
}