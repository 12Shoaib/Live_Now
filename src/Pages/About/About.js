import {BsGlobeCentralSouthAsia} from 'react-icons/bs'
import {BiCodeBlock} from 'react-icons/bi'
import {ImUsers} from 'react-icons/im'
import {FaAssistiveListeningSystems} from 'react-icons/fa'
import {SiSololearn} from 'react-icons/si'
import {SiWebmoney} from 'react-icons/si'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'
import about from './about.module.css'
import Navbar from '../../Components/Navbar.js/Navbar'


const data = [
    {
        icon: <BsGlobeCentralSouthAsia className={about.icon}/>,
        title: 'Our vision and mission',
        content: 'We believe in a world where people have the freedom to choose how their digital content is shared, and we foster their success by providing an open web platform of choice.'
    },
    {
        icon:<BiCodeBlock className={about.icon_2} />,
        title:'Innovation On the Go',
        content:'We believe that fast growth comes with rapid adaptation to the latest technological advancements. To maintain maximum speed and efficiency for our customers, we constantly improve our servers’ infrastructure with advanced anti-DDoS solutions, LiteSpeed engines and our home designed hPanel.'
    },
    {
        icon:<ImUsers className={about.icon_3}/>,
        title:'Who we are',
        content:'Livenow is a now a one stop solution for all web web hosting problems. Livenow is continually innovated new ways to deliver on our mission: to empower people to fully harness the web. We provide comprehensive tools to millions of users throughout the world so anyone, novice or pro, can get on the web and thrive with our web hosting packages.'
    },
    {
        icon:<FaAssistiveListeningSystems className={about.icon_4} />,
        title:'We Listen',
        content:'The Customer is the highest-ranking position in Livenow. They contribute to the development of our products by giving us feedback and complaints. We get kudos a lot, too. Excellent marks in Trustpilot and Reclame Aqui say that we are on the right track.'
    },
    {
        icon: <SiSololearn className={about.icon_5} />,
        title:'Solutions',
        content:'Our best-in-class solutions are designed to meet the needs of a wide range of customers. All fully-managed, these solutions empower novice users with tools that are simple to use, and help pro users save time and energy normally associated with maintenance. Whether on a traditional hosting or cloud-based server, all incorporate the ability to upgrade so customers can easily scale as they grow.'
    },
    {
        icon:<SiWebmoney className={about.icon_6}/>,
        title:'Better Web',
        content:'its not just about getting people online. Its about creating a better, safer web for everyone in the process. We fight spammers, and invest in countless open source projects to help push the internet to its full potential. We promote web civility and do all we can to foster a safe place where the young and old, novice and pro, can fully harness the web to accomplish great things.'
    },
]

const About = ( ) => {
    return(
        <>
            <Navbar />
            <div className={about.main__Component}>
                <div className={about.card}>
                    <h1 className={about.heading}>Your digital presence is your virtual home. Make it welcoming, inspiring, and truly yours</h1>
                    <p className={about.sub_heading}>It's not just a mission,  -it's a noble cause that fuels our purpose and gives meaning to our work.</p>
                    <img className={about.image} alt='user' src='https://images.pexels.com/photos/3987020/pexels-photo-3987020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'  />
                </div>
                <div className={about.mini_cards_wrapper}>
                    {data.map((element) => <div className={about.mini_card}>
                        <h1 className={about.min_card_heading}>{element.icon} {element.title}</h1>
                        <p className={about.min_card_sub_heading} >{element.content}</p>
                    </div>)}    
                </div>
            </div>

            <div className={about.footer_main_Component}>
                <h1 className={about.footer_heading}>< AiOutlineCloudServer className={about.logo}/>Livenow</h1>
                <div className={about.copyRights_Container}>

                    <p className={about.copyRights}> © 2023 LiveNow - LLc</p>
                    <p className={about.copyRights}> All rights reserved to Livenow- imprint</p>
                    <p className={about.copyRights}> Terms of service - Data protection - LiveNow</p>
                </div>
                <div className={about.social_Media}>
                <a className={about.links} href='https://www.youtube.com/'><BsYoutube/> Youtube</a>
                <a className={about.links} href='https://web.whatsapp.com/'> <BsWhatsapp /> Whatsapp</a>
                <a className={about.links} href='https://twitter.com/'><FaTwitterSquare /> Twitter</a>
                <a className={about.links} href='https://www.instagram.com/'><GrInstagram/>Instagram</a>
                </div>
            </div>
        </>
    )
}

export default About