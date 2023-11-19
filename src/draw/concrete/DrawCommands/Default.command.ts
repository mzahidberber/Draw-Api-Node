import { BaseCommandAbstract } from "../../abstract/BaseCommandAbstract";


export class DefaultCommand extends BaseCommandAbstract{
    controlCommandAsync(): Promise<any> {
        throw new Error("Method not implemented.");
    }

}