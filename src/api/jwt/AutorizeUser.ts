


export class AutorizeUser{
    nameid:string
    email:string
    name:string
    jti:string
    roles:string[]
    aud:string[]
    nbf:number
    exp:number
    iss:string
    authorize:boolean=false

    constructor(data:any={}) {
        this.nameid = data.nameid || ''
        this.email = data.email || ''
        this.name = data.name || ''
        this.jti = data.jti || ''
        this.roles = data.roles || []
        this.aud = data.aud || []
        this.nbf = data.nbf || 0
        this.exp = data.exp || 0
        this.iss = data.iss || ''
      }


}