import { nanoid } from 'nanoid'
import {atom} from 'recoil'

export const Data = atom({
    key:'producDetails',
    default: [
        {
            Id: nanoid(),
            name:' Haswell SSD' ,
            Server : 'IntelXoen E3-1230 v3',
            Ram: '16 GB DDR3 Ecc',
            HDD : '2x 240GB SSD SW RAID IPMI/KVM',
            Price: '$89',
            contract:'Monthly',
            timeToDeliver:'16Hours',
            image:"https://img.freepik.com/free-vector/two-black-server-racks-realistic-illustration_1284-12129.jpg?w=2000",
            cores:'4x 3.30 GHz (Single Quad Core)'
            
        
        }
    ]
})