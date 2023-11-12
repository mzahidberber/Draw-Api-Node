import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";
import { AutorizeUser } from './AutorizeUser';


export enum AutorizeRoles {
    Admin="admin",
    User = "user",
    Manager="manager"
  }


function CheckAutorize(roles:AutorizeRoles[],req: Request, res: Response, next: NextFunction){
    const token=req.headers.authorization?.split(' ')[1]
    if (token) {
        //keyi environmentten al!!
        const secretKey = 'mysecuritykeyolabildigincekarisikolsun';
        jwt.verify(token, secretKey,{ algorithms: ['HS256'] }, (err, decoded) => {
          if (err) {
            return res.status(403).json({ message: 'Invalid token' });
          } else {
            req.user = new AutorizeUser(decoded)
            if (roles.length!= 0){
                for (let i = 0; i < roles.length; i++) {
                    const role = roles[i]
                    if(!req.user.roles.includes(role)){
                        return res.status(403).json({ message: 'You have no authority' })
                    }
                }
                
            }
            req.user.authorize=true
          }

        })
    } else {
      return res.status(401).json({ message: 'Not found token' });
    }
}



export function AutorizeMethod(roles:AutorizeRoles[]=[]){
    return function(target: any, key: string, descriptor: PropertyDescriptor){
        let originalMethod = target[key]
        target[key] = async function (req: Request, res: Response, next: NextFunction):Promise<any> {
            CheckAutorize(roles,req,res,next)
            if (req.user.authorize) return originalMethod.apply(this, [req, res, next])
            else return
        }
        return target
    } 
}


export function AutorizeClass(roles:AutorizeRoles[]=[]) {
    return function(target: any){
        const classPrototype = target.prototype

        const methodNames = Object.getOwnPropertyNames(classPrototype)

        methodNames.forEach(methodName => {
            const originalMethod = classPrototype[methodName]
            
            classPrototype[methodName] = async function (req: Request, res: Response, next: NextFunction):Promise<any> {
                CheckAutorize(roles,req,res,next)
                if (req.user.authorize) return originalMethod.apply(this, [req, res, next])
                else return
            }
        })

        return target
    }
}
