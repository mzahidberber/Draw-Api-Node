import { logger } from "../../crosscuttingconcers/logging/winston/Logger"
import 'reflect-metadata';


export function LogAspectClass() {
    return function(target: any){

        const classPrototype = target.prototype

        const methodNames = Object.getOwnPropertyNames(classPrototype)

        methodNames.forEach(methodName => {
            const originalMethod = classPrototype[methodName] 

            const paramNames = originalMethod.toString()
            .match(/\((.*?)\)/)?.[1]
            .split(',')
            .map((param: string) => param.trim()) || [];
            
            classPrototype[methodName] =async function (...args: any[]){
                let params=""
                for (let i = 0; i < paramNames.length; i++) {
                    const name = paramNames[i]
                    const value=JSON.stringify(args[i])
                    params+=` | ${name} : ${value}` 
                }


                try {
                    const result = await originalMethod.apply(this, args)
                    logger.info(`${target.name} | ${methodName}${params} | Return: ${JSON.stringify(result)}`)
                    return result
                } catch (error) {
                    logger.error(`${target.name} | ${methodName}${params} | Error: ${error}`)
                }
            }
        })

    }
}