import Entity from './entity'
import asnDetail from './asnDetail'

export default class asn extends Entity<number>{
    extensionGUID	  :string;
    aSNNumber		  :string;
    externReceiptNumber:string;
    customerID		  :number;
    customerName	  :string;
    warehouseID		  :number;
    warehouseName	  :string;
    expectDate		  :string;
    aSNStatus		  :number;
    aSNType			  :string;
    pO				  :string;
    contact			  :string;
    contactInfo		  :string;
    completeDate	  :string;
    remark			  :string;
    creator			  :string;
    creationTime	  :string;
    updator			  :string;
    updateTime		  :string;
    str1			  :string;
    str2			  :string;
    str3			  :string;
    str4			  :string;
    str5			  :string;
    str6			  :string;
    str7			  :string;
    str8			  :string;
    str9			  :string;
    str10			  :string;
    str11			  :string;
    str12			  :string;
    str13			  :string;
    str14			  :string;
    str15			  :string;
    str16			  :string;
    str17			  :string;
    str18			  :string;
    str19			  :string;
    str20			  :string;
    dateTime1		  :string;
    dateTime2		  :string;
    dateTime3		  :string;
    dateTime4		  :string;
    dateTime5		  :string;
    int1			  :number;
    int2			  :number;
    int3			  :number;
    int4			  :number;
    int5			  :number;
    asnDetail:Array<asnDetail>;
}