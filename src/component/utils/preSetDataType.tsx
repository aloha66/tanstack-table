import dayjs from "dayjs";
import { DATA_TYPE, PreSetDataType } from "../types";

export function renderPreSetDataType(type:PreSetDataType,val,row,index) {
    switch (type) {
        case DATA_TYPE.DATE:
            return dayjs(val).format('DD/MM/YYYY')
    
        default:
            break;
    }
}