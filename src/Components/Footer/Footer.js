import footer from './footer.module.css'
import {AiOutlineCloudServer} from 'react-icons/ai'


const Footer = () => {
    return (
        <div className={footer.main_Component}>
       <h1 className={footer.footer_heading}>< AiOutlineCloudServer className={footer.logo}/>Livenow</h1>
       <a href='https://www.youtube.com/'> Youtube</a>
       <a href='https://www.youtube.com/'> Whatsapp</a>
       <a href='https://www.youtube.com/'> Twitter</a>
       <a href='https://www.youtube.com/'> Instagram</a>
        <p> © 2023 LiveNow - LLc</p>
        </div>
    )
}
export default Footer