import { Device } from "./device"

export interface Asset {
    id: number , 
    name : String ,
    token : String , 
    devices : Device
}