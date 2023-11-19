import axios from 'axios'
import { PointGeo } from '../../models/others/PointGeo'
import { Environment } from '../../environment/Environment'
import { logger } from '../../crosscuttingconcers/logging/winston/Logger'
import { RadiusAndCPoint } from './model/RadiusAndCPoint'
import { StartAndStop } from './model/StartAndStop'



export class GeoService{
    
    static async findLengthLineAsync(p1:PointGeo,p2:PointGeo):Promise<number | null>{
        const path=Environment.GEOSERVICE_URL + GeoServiceUrls.findTwoPointsLength
        try {
            const result=await axios.post(path,[p1,p2])
            logger.info(`GeoService | findLengthLine | p1: ${JSON.stringify(p1)} p2: ${JSON.stringify(p2)} | RETURN : ${result.data.data}`)
            return result.data.data
        } catch (err:any) {
            logger.error(JSON.stringify(err.response.data.error))
        }
        return null
    }

    static async findCenterAndRadiusAsync(p1:PointGeo,p2:PointGeo,p3:PointGeo):Promise<RadiusAndCPoint | null>{
        const path=Environment.GEOSERVICE_URL + GeoServiceUrls.findCenterAndRadius
        try {
            const result=await axios.post(path,[p1,p2,p3])
            logger.info(`GeoService | findCenterAndRadius | p1: ${JSON.stringify(p1)} p2: ${JSON.stringify(p2)} p3: ${JSON.stringify(p3)} | RETURN : ${JSON.stringify(result.data.data)}`)
            return result.data.data
        } catch (err:any) {
            logger.error(JSON.stringify(err.response.data.error))
        }
        return null
    }

    static async findToSlopeLineAsync(p1:PointGeo,p2:PointGeo):Promise<number | null>{
        const path=Environment.GEOSERVICE_URL + GeoServiceUrls.findToSlopeLine
        try {
            const result=await axios.post(path,[p1,p2])
            logger.info(`GeoService | findToSlopeLine | p1: ${JSON.stringify(p1)} p2: ${JSON.stringify(p2)} | RETURN : ${JSON.stringify(result.data.data)}`)
            return result.data.data
        } catch (err:any) {
            logger.error(JSON.stringify(err.response.data.error))
        }
        return null
    }

    static async findStartAndStopAngleAsync(centerPoint:PointGeo,p1:PointGeo,p2:PointGeo,p3:PointGeo):Promise<StartAndStop | null>{
        const path=Environment.GEOSERVICE_URL + GeoServiceUrls.findStartAndStopAngle
        try {
            const result=await axios.post(path,[centerPoint,p1,p2,p3])
            logger.info(`GeoService | findStartAndStopAngle | centerPoint: ${JSON.stringify(centerPoint)} p1: ${JSON.stringify(p1)} p2: ${JSON.stringify(p2)} p3: ${JSON.stringify(p3)} | RETURN : ${JSON.stringify(result.data.data)}`)
            return result.data.data
        } catch (err:any) {
            logger.error(JSON.stringify(err.response.data.error))
        }
        return null
    }

    static async findStartAndStopAngleTwoPointAsync(centerPoint:PointGeo,p1:PointGeo,p2:PointGeo):Promise<StartAndStop | null>{
        const path=Environment.GEOSERVICE_URL + GeoServiceUrls.findStartAndStopAngleTwoPoint
        try {
            const result=await axios.post(path,[centerPoint,p1,p2])
            logger.info(`GeoService | findStartAndStopAngleTwoPoint | centerPoint: ${JSON.stringify(centerPoint)} p1: ${JSON.stringify(p1)} p2: ${JSON.stringify(p2)} | RETURN : ${JSON.stringify(result.data.data)}`)
            return result.data.data
        } catch (err:any) {
            logger.error(JSON.stringify(err.response.data.error))
        }
        return null
    }


    static async findPointOnCircleAsync(centerPoint:PointGeo,radius:number,angle:number):Promise<PointGeo | null>{
        const path=Environment.GEOSERVICE_URL + GeoServiceUrls.findPointOnCircle
        try {
            const result=await axios.post(path,[{"point":centerPoint,"radius":radius,"angle":angle}])
            logger.info(`GeoService | findPointOnCircle | centerPoint: ${JSON.stringify(centerPoint)} radius: ${JSON.stringify(radius)} angle: ${JSON.stringify(angle)} | RETURN : ${JSON.stringify(result.data.data)}`)
            return result.data.data
        } catch (err:any) {
            logger.error(JSON.stringify(err.response.data.error))
        }
        return null
    }
}



enum GeoServiceUrls{
    findTwoPointsLength="findTwoPointsLength/",
    findCenterAndRadius="findCenterAndRadius/",
    findToSlopeLine="findToSlopeLine/",
    findDegreeLineSlope="findDegreeLineSlope/",
    findDegreeLineTwoPoints="findDegreeLineTwoPoints/",
    convertDegreeToSlope="convertDegreeToSlope/",
    convertRadianToDegree="convertRadianToDegree/",
    convertDegreeToRadians="convertDegreeToRadians/",
    findCenterPointToLine="findCenterPointToLine/",
    findDegreeToBetweenTwoLines="findDegreeToBetweenTwoLines/",
    findDotProductToTwoPoints="findDotProductToTwoPoints/",
    findDifferenceTwoPoints="findDifferenceTwoPoints/",
    wherePointOnLine="wherePointOnLine/",
    findInsectionPointToTwoLines="findInsectionPointToTwoLines/",
    findPointLength="findPointLength/",
    wherePointZone="wherePointZone/",
    findNearetPoint="findNearetPoint/",
    findStartAndStopAngle="findStartAndStopAngle/",
    findStartAndStopAngleTwoPoint="findStartAndStopAngleTwoPoint/",
    findPointOnCircle="findPointOnCircle/"
}