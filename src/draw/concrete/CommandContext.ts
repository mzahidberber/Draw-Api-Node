import { IBaseCommand } from "../abstract/IBaseCommand";
import { CircleCenterPoint } from "./DrawCommands/CircleCenterPoint.command";
import { CircleCenterRadius } from "./DrawCommands/CircleCenterRadius.command";
import { CircleTreePoint } from "./DrawCommands/CircleTreePoint.command";
import { CircleTwoPoint } from "./DrawCommands/CircleTwoPoint.command";
import { Line } from "./DrawCommands/Line.command";
import { Rectangle } from "./DrawCommands/Rectangle.command";
import { CommandEnums } from "./CommandEnums";
import { DefaultCommand } from "./DrawCommands/Default.command";
import { SPLine } from "./DrawCommands/SPLine.command";
import { ArcCenterTwoPoint } from "./DrawCommands/ArcCenterTwoPoint.command";
import { ArcThreePoint } from "./DrawCommands/ArcThreePoint.command";
import { Ellipse } from "./DrawCommands/Ellipse.command";


export class CommandContext{
    private _command : IBaseCommand
    private _defaultCommand:DefaultCommand

    private _commands:{ [name: string]: new (radius:number,drawId: number, layerId: number, penId: number) => IBaseCommand}={
        [CommandEnums.line]:Line,
        [CommandEnums.circleCenterPoint]:CircleCenterPoint,
        [CommandEnums.circleCenterRadius]:CircleCenterRadius,
        [CommandEnums.circleTreePoint]:CircleTreePoint,
        [CommandEnums.circleTwoPoint]:CircleTwoPoint,
        [CommandEnums.rectangle]:Rectangle,
        [CommandEnums.spline]:SPLine,
        [CommandEnums.arcCenterTwoPoint]:ArcCenterTwoPoint,
        [CommandEnums.arcThreePoint]:ArcThreePoint,
        [CommandEnums.ellipse]:Ellipse,

    }

    constructor(){
        this._defaultCommand=new DefaultCommand(30,0,0,0)
        this._command=this._defaultCommand
    }

    setCommand(command:CommandEnums,radius:number,drawId:number, layerId: number, penId: number):void{
        this._command=new this._commands[command](radius,drawId,layerId,penId)
    }

    getCommand():IBaseCommand{
        return this._command
    }

    setContextDefaultCommand(){
        this._command=this._defaultCommand
    }
}