import home from './home.module.css'
import Navbar from '../Navbar.js/Navbar'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {BsChatDotsFill} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import {useState} from 'react'
import { useEffect } from 'react'

const Home = () => {
    const [show , setShow] = useState(false)
    const [question , setQuestion] = useState(0)
    const [bot , setBot] = useState(false)

    useEffect(() => {
     setTimeout(() => {
        setBot(true)
     } , 3000)   
    } , [])

    const toggleDialog = () => {
        setShow((prev) => !prev)
        setBot(false)
    }
    const toggleQues1 = () => {
        setShow(false)
        setQuestion(1)
    }
    const toggleQues2 = () => {
        setShow(false)
        setQuestion(2)
    }
    const toggleQues3 = () => {
        setShow(false)
        setQuestion(3)
    }
    const toggleQues4 = ( ) => {
        setShow(false)
        setQuestion(4)
    }
    const toggleQues5 = () => {
        setShow(false)
        setQuestion(5)
    }
    const closeQuestion = () => {
        setShow(true)
        setQuestion(0)
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
                <p className={home.dialog_Option} onClick={toggleQues2}>Help me in finding right product</p>
                <p className={home.dialog_Option} onClick={toggleQues3}>What services we offer</p>
                <p className={home.dialog_Option} onClick={toggleQues4}>Iam confused can you help</p>
                <p className={home.dialog_Option} onClick={toggleQues5}>Connect me to technical team</p>
             </div>}
             {question === 1 &&<div className={home.dialog_Question1}>
             <h2 className={home.heading__Logo}> <AiOutlineCloudServer className={home.logo} /> LiveNow</h2>
             <p className={home.dialog_Option}>Can you create a website for me ? </p>
             <p className={home.dialog_Bot}>Hi , Iam Shoaib's robot </p>
             <p className={home.dialog_Bot}>Yes, We can build a website from scratch ,thinking of developing yourself and taking your buisness to digital. Livenow is the one stop solution for all of this</p>
             <p className={home.dialog_Bot} onClick={closeQuestion}>go to main menu</p>
             </div>}
            {question ===2 && <div className={home.dialog_Question1}>
            <h2 className={home.heading__Logo}> <AiOutlineCloudServer className={home.logo} /> LiveNow</h2>
             <p className={home.dialog_Option}>Help me in finding right product </p>
             <p className={home.dialog_Bot}>Hi , Iam Shoaib's robot </p>
             <p className={home.dialog_Bot}>Initially you can go through all of our products on the products pagfe and you can check there the availability , pricing , ratings , after that Live now is providing a free trail persiod od 7 days you can utilize that and experience Livenow</p>
             <p className={home.dialog_Bot} onClick={closeQuestion}>go to main menu</p>
             </div>}
            {question===3 && <div className={home.dialog_Question1}>
             <h2 className={home.heading__Logo}> <AiOutlineCloudServer className={home.logo} /> LiveNow</h2>
             <p className={home.dialog_Option}>What services we offer </p>
             <p className={home.dialog_Bot}>Hi , Iam Shoaib's robot </p>
             <p className={home.dialog_Bot}>Currently Livenow is providing all kinds of Saas services.</p>
             <p className={home.dialog_Bot} onClick={closeQuestion}>go to main menu</p>
                         
             </div>}
             {question===4 && <div className={home.dialog_Question1}>
             <h2 className={home.heading__Logo}> <AiOutlineCloudServer className={home.logo} /> LiveNow</h2>
             <p className={home.dialog_Option}>Iam confused can you help </p>
             <p className={home.dialog_Bot}>Hi , Iam Shoaib's robot </p>
             <p className={home.dialog_Bot}>If your a buisness want to grow in digital connect Livenow@1.org , if want to start web development get started - https://developer.mozilla.org/en-US/docs/Learn </p>
             <p className={home.dialog_Bot} onClick={closeQuestion}>go to main menu</p>
             </div>}
            {question === 5 && <div className={home.dialog_Question1}>
             <h2 className={home.heading__Logo}> <AiOutlineCloudServer className={home.logo} /> LiveNow</h2>
             <p className={home.dialog_Option}>Connect me to technical team </p>
             <p className={home.dialog_Bot}>Hi , Iam Shoaib's robot </p>
             <p className={home.dialog_Bot}>Currently our technical is not available , sorry for the inconvenient</p>
             <p className={home.dialog_Bot}>Dont'worry our team will be connecting you soon.</p>
             <p className={home.dialog_Bot} onClick={closeQuestion}>go to main menu</p>
             </div>}
             <div className={home.main__Content}>
            <span className={home.heading}>   
            LiveNow , One stop<br/> solution for all web hosting problems</span>
             </div>
            {bot && <><GrClose onClick={() => setBot(false)} className={home.close} /><p className={home.hello_Tag}> Hi Iam Shoaib's bot here..!!&#128515;</p></>}
             <div className={home.fixed__ChatButton}>
                <button className={home.fixed_Button} onClick={toggleDialog}>{show ? <GrClose className={home.chat_Icon} /> :<BsChatDotsFill className={home.chat_Icon}/>}  </button>
             </div>
             <div>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
                <h2>HElooW</h2>
             </div>
        </div>
    )
}

export default Home