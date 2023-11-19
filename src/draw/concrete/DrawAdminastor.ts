import { PointGeo } from "../../core/models/others/PointGeo";
import { IDrawAdminastor } from "../abstract/IDrawAdminastor";
import { ElementInfo } from "../models/ElementInfo";
import { CommandContext } from "./CommandContext";
import { CommandEnums } from "./CommandEnums";

export class DrawAdminastor implements IDrawAdminastor{
    public useTime: Date
    private _commandContext:CommandContext
    private _isWorkingCommand:boolean=false
    private _selectedDrawId:number=0
    private _selectedLayerId:number=0
    private _selectedPenId:number=0
    private _radius:number=30 //tekrar bak
    
    constructor(){
        this._commandContext=new CommandContext()
        this.useTime=new Date()
    }

    public refreshTime() { this.useTime=new Date() }

    async startCommandAsync(command: CommandEnums,drawId: number=0, layerId: number=0, penId: number=0): Promise<ElementInfo> {
        this.refreshTime()
        if(!this._isWorkingCommand){
            this._selectedDrawId=drawId
            this._selectedLayerId=layerId
            this._selectedPenId=penId
            this._commandContext.setCommand(command,this._radius,drawId,layerId,penId)
            this._isWorkingCommand=true
            return {isTrue:true}
        }
        return {isTrue:false,message:"Last command stop or finish!"}
    }
    async addCoordinateAsync(point: PointGeo): Promise<ElementInfo> {
        this.refreshTime()
        if(this._isWorkingCommand){
            const command=this._commandContext.getCommand()
            const element=await command.addPointAsync(point)
            if(command.isCompleted){
                this._commandContext.setContextDefaultCommand()
                this._isWorkingCommand=false
            }
            return element
        }
        return {isTrue:false,message:"Last start command!"}
    }
    async setRadiusAsync(radius: number): Promise<ElementInfo> {
        this.refreshTime()
        this._radius=radius
        const command=this._commandContext.getCommand()
        command.radius=this._radius
        return {isTrue:true,message:`Radius changed ${this._radius}`}
    }
    
    async stopCommandAsync(): Promise<ElementInfo> {
        this.refreshTime()
        if(this._isWorkingCommand){
            const command=this._commandContext.getCommand()
            command.finishCommand()
            this._isWorkingCommand=false
            this._commandContext.setContextDefaultCommand()
            command.isFinish=false
            return {isTrue:true,message:`Command stoped`}
        }
        return {isTrue:false,message:`Last start command`}
        
    }
    async setIsFinishAsync(): Promise<ElementInfo> {
        this.refreshTime()
        if(this._isWorkingCommand){
            const command=this._commandContext.getCommand()
            command.isFinish=true
            const data=await command.controlCommandAsync()
            await this.stopCommandAsync()
            return data
        }
        return {isTrue:false,message:`Last start command`}
    }
}