import home from './home.module.css'
import Navbar from '../Navbar.js/Navbar'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {BsChatDotsFill} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import {useState} from 'react'
import { useEffect } from 'react'


const Home = () => {
    const [show , setShow] = useState(false)
    const [question , setQuestion] = useState(1)

    useEffect(() => {
     setTimeout(() => {
        setShow(true)
     } , 3000)   
    } , [])

    const toggleDialog = () => {
        setShow((prev) => !prev)
    }
    const toggleQues1 = () => {
        setQuestion((prev) => !prev)
    }
    return (
        <div className={home.main__Component}>
            <Navbar />
            <video 
            src = 'https://res.cloudinary.com/dmm420bfv/video/upload/v1680824077/WhatsApp_Video_2023-04-07_at_5.02.17_AM_tik3nc.mp4'
             muted autoPlay loop />
             {show && <div className={home.dialog__Box}>
                <h2 className={home.heading__Logo}> <AiOutlineCloudServer className={home.logo} /> LiveNow</h2>
                <p className={home.dialog_Bot}>Hi ,Shoaib here how may i assist you ..? </p>
                <p className={home.dialog_Option} onClick={toggleQues1}>Can you create a website for me </p>
                <p className={home.dialog_Option}>Help me in finding right product</p>
                <p className={home.dialog_Option}>What services we offer</p>
                <p className={home.dialog_Option}>Iam confused can you help</p>
                <p className={home.dialog_Option}>Do you offer a trial period</p>
             </div>}
             <div className={home.fixed__ChatButton}>
                <button className={home.fixed_Button} onClick={toggleDialog}>{show ? <GrClose className={home.chat_Icon} /> :<BsChatDotsFill className={home.chat_Icon}/>}  </button>
             </div>
        </div>
    )
}

export default Home