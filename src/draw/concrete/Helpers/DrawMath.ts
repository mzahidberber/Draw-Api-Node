import { PointGeo } from "../../../core/models/others/PointGeo";


export class DrawMath{
    public static findDifferanceTwoPoint(p1:PointGeo,p2:PointGeo):number{
        const difx=Math.abs((p2.X-p1.X))
        const dify=Math.abs((p2.Y-p1.Y))
        return Math.sqrt((difx*difx)+(dify*dify))
    }

    public static findBetweenPointToTwoPoint(p1:PointGeo,p2:PointGeo):PointGeo{
        return {
            X:(p1.X+p2.X)/2,
            Y:(p1.Y+p2.Y)/2,
            Z:(p1.Z+p2.Z)/2,
        }
    }

    public static additionPointPlusY(p:PointGeo,distance:number):PointGeo{
        return {X:p.X,Y:p.Y+distance,Z:p.Z}
    }

    public static additionPointPlusX(p:PointGeo,distance:number):PointGeo{
        return {X:p.X+distance,Y:p.Y,Z:p.Z}
    }

    public static findDifferancePointX(p1:PointGeo,p2:PointGeo):number{
        return Math.abs(p1.X-p2.X)
    }

    public static findDifferancePointY(p1:PointGeo,p2:PointGeo):number{
        return Math.abs(p1.Y-p2.Y)
    }
}