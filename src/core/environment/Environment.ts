import dotenv from 'dotenv'
dotenv.config()

export class Environment{
    private static instance:Environment
    public static PORT:string | undefined
    public static NODE_ENV:string | undefined
    public static DBHOST:string | undefined
    public static DBUSERNAME:string | undefined
    public static DBPASSWORD:string | undefined
    public static DBNAME:string | undefined
    public static DBDIALECT:string | undefined
    public static AUTORIZE_SECRET_KEY:string | undefined
    public static REDIS_URL:string | undefined
    public static GEOSERVICE_URL:string | undefined
    public static DB_TYPE:string | undefined
    public static MONGODB_CSTR:string | undefined
    
    
    private constructor(){}

    public static getInstance():Environment{
        if(!this.instance){
            Environment.instance=new Environment()
            Environment.PORT=process.env.PORT
            Environment.NODE_ENV=process.env.NODE_ENV
            Environment.DBHOST=process.env.DBHOST
            Environment.DBUSERNAME=process.env.DBUSERNAME
            Environment.DBPASSWORD=process.env.DBPASSWORD
            Environment.DBNAME=process.env.DBNAME
            Environment.DBDIALECT=process.env.DBDIALECT
            Environment.AUTORIZE_SECRET_KEY=process.env.AUTORIZE_SECRET_KEY
            Environment.REDIS_URL=process.env.REDIS_URL
            Environment.GEOSERVICE_URL=process.env.GEOSERVICE_URL
            Environment.DB_TYPE=process.env.DB_TYPE
            Environment.MONGODB_CSTR=process.env.MONGODB_CSTR
        }
        return Environment.instance
    }

} 


Environment.getInstance()

