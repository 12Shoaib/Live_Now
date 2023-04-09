import footer from './footer.module.css'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const Footer = () => {
    return (
        <div className={footer.main_Component}>
       <h1 className={footer.footer_heading}>< AiOutlineCloudServer className={footer.logo}/>Livenow</h1>
       <div className={footer.copyRights_Container}>

        <p className={footer.copyRights}> © 2023 LiveNow - LLc</p>
        <p className={footer.copyRights}> All rights reserved to Livenow- imprint</p>
        <p className={footer.copyRights}> Terms of service - Data protection - LiveNow</p>
       </div>
       <div className={footer.social_Media}>
       <a className={footer.links} href='https://www.youtube.com/'><BsYoutube/> Youtube</a>
       <a className={footer.links} href='https://www.youtube.com/'> <BsWhatsapp /> Whatsapp</a>
       <a className={footer.links} href='https://www.youtube.com/'><FaTwitterSquare /> Twitter</a>
       <a className={footer.links} href='https://www.youtube.com/'><GrInstagram/>Instagram</a>
        </div>
    </div>
    )
}
export default Footer