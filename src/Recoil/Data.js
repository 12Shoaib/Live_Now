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
            contract:'Monthly Basis',
            timeToDeliver:'Delivery in 16Hours',
            image:"https://img.freepik.com/free-vector/two-black-server-racks-realistic-illustration_1284-12129.jpg?w=2000",
            cores:'4x 3.30 GHz (Single Quad Core)',
            image:'https://static.lenovo.com/ww/img/dc/servers/lenovo-servers-products-racks.png'            
        
        },
        {
            Id:nanoid(),
            name:'Ultimate Haswell',
            Server:'2x Intel Xeon E5-2630 v3',
            Ram:' 64GB DDR4 ECC reg.',
            HDD:'2x 500 GB SSD HW Raid IPMI/KVM',
            Price:'$149',
            contract:'Monthly Basis',
            timeToDeliver:'Delivery in 16Hours',
            cores:'2x 8x 2.40 GHz (Dual 8 Core)',
            image:'https://us.123rf.com/450wm/frender/frender2001/frender200100192/138969888-network-workstation-servers-3d-illustration-isolated-on-white-background.jpg?ver=6'

        }, 
        {
            Id:nanoid(),
            name:'Hexa Core Xeon E5 2620',
            Server:'2X1 TB Enterprise SATA Storage',
            Ram:'8 GB Ram ECC Lc',
            HDD:'4x 800GB SSD HX',
            Price:'$199',
            contract:'Monthly Basis',
            timeToDeliver:'Delivery in 20Hours',
            cores:'2.0 Ghz/ 15MB Cache',
            image:"https://img.freepik.com/free-vector/two-black-server-racks-realistic-illustration_1284-12129.jpg?w=2000",


        },
        {
            Id:nanoid(),
            name:'XEON 4-Core',
            Server:'Intel Xeon 4-Core 8-Thread',
            Ram:'4 GB RAM Lc Pmc.',
            HDD:'1 TB HDD Hc',
            Price:'$169',
            contract:'Monthly Basis',
            timeToDeliver:'Delivery in 18Hours',
            cores:' 8x 2.40 GHz (Dual 4 Core)',
            image:'https://store.hinkwong.com/image/cache/catalog/product/lenovo-thinksystem-sr650-gen-2-7x06a0cdcn-mount-server-4882-800x800.png'
        },
    ]
})