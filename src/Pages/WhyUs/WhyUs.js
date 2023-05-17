import why from './why.module.css'
import Navbar from '../../Components/Navbar.js/Navbar'
import {TbMessages} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {DiNodejs} from 'react-icons/di'
import {FaRegThumbsUp} from 'react-icons/fa'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

import {MdSupportAgent} from 'react-icons/md'
import {FaHammer} from 'react-icons/fa'
import {AiFillLock} from 'react-icons/ai'
import {FiMonitor} from 'react-icons/fi'
import {BsArrowsFullscreen} from 'react-icons/bs'
const data = [
    {
        logo:<TbMessages className={why.icon1} />,
        title:'MySql with root access',
        text: 'Our dedicated servers host MySQL databases locally instead of on a separate machine.This makes for faster queries to a database youre hosting!'
    },
    {
        logo: <FiUsers  className={why.icon2}/>,
        title:'Resellers and sub account Feature',
        text: 'Create an unlimited number of sub accounts to help you manage client accounts, client and contractor website access, FTP, and billing.'
    },
    {
        logo: <DiNodejs  className={why.icon3}/>,
        text:'Node.js works best in a powerful VPS environment. Let your server-side JavaScript freak flag fly!',
        title:'Node.js '
    },
]
const _dataTwo = [
    {
        icon:<FaRegThumbsUp />,
        title:'100% Network Uptime Guarantee',
        text: 'Were so confident in our infrastructure that we back your site up with a 100% uptime guarantee.'
    },
    {
        icon: <MdSupportAgent />,
        title: '24x7 Tech Support & Server Monitoring',
        text: 'Rest easy knowing your servers are under constant monitoring by our in-house experts.'
    },
    {
        icon: <FaHammer/>,
        text:'Live the command-line life. Gain secure remote access and get down to business.',
        title: 'Full Root & Shell Access (SSH)'
    },
    {
        icon:<FiMonitor/>,
        text: 'A familiar industry standard ready to go to work for you.',
        title: 'Ubuntu Linux'
    },
    {
        icon: <AiFillLock/>,
        title:'DDoS Protection',
        text:'Continue to serve your website visitors no matter what'
    },
    {
        icon:<BsArrowsFullscreen/> ,
        text: 'Get an IPv4 address and future-proof your account with an unlimited number of free IPv6 addresses.',
        title: 'Unique IPv4 and IPv6'
    }

]

const Why = () => {
    return(
        <>
        <div className={why.main__component}>
            <Navbar />
            <div className={why.container}>
                <div className={why.poster}>
                    <div className={why.section_one}>
                        <h1 className={why.heading}>Included with Every Dedicated Hosting Plan</h1>
                    </div>
                    <div className={why.section_two}>
                        {_dataTwo.map((element) => <div className={why.small_card}>
                            <span className={why.logo}>{element?.icon}</span>
                            <span className={why.header_text}>{element?.title}</span>
                            <span className={why.inner_text}>{element?.text}</span>
                        </div>)}
                    </div>
                </div>
                <div className={why.card_wrapper}>
                    {data.map((element) => <div className={why.card}>
                        <span className={why.logo}>{element?.logo}</span>
                        <h4 className={why.title}>{element?.title}</h4>
                        <span className={why.text}>{element?.text} </span>
                    </div>)}
                </div>
            </div>
        </div>

        <div className={why.footer_main_Component}>
                <h1 className={why.footer_heading}>< AiOutlineCloudServer className={why.logo}/>Livenow</h1>
                <div className={why.copyRights_Container}>

                    <p className={why.copyRights}> © 2023 LiveNow - LLc</p>
                    <p className={why.copyRights}> All rights reserved to Livenow- imprint</p>
                    <p className={why.copyRights}> Terms of service - Data protection - LiveNow</p>
                </div>
                <div className={why.social_Media}>
                <a className={why.links} href='https://www.youtube.com/'><BsYoutube/> Youtube</a>
                <a className={why.links} href='https://web.whatsapp.com/'> <BsWhatsapp /> Whatsapp</a>
                <a className={why.links} href='https://twitter.com/'><FaTwitterSquare /> Twitter</a>
                <a className={why.links} href='https://www.instagram.com/'><GrInstagram/>Instagram</a>
                </div>
            </div>
        </>
    )
}   
export default Why