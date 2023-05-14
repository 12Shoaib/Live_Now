import navbar from './navbar.module.css'
import  {useNavigate} from 'react-router-dom'
import { AiOutlineCloudServer } from 'react-icons/ai'

const Navbar = () => {
    const navigate = useNavigate()
    const redirectHome = () => {
        navigate('/')
    }
    const redirectContact = () => {
        navigate('/Contact')
    }
    const redirectGuide = () => {
        // navigate('/Guide')
    }
    const redirectProducts = () => {
        navigate('/Product')
    }
    const redirectAbout = () => {
        // navigate('/About')
    }
    const redirectWhy = () => {
        // navigate('/WhyUs')
    }
    const redirectLogin = () => {
        navigate('/clientLogIn')
    }
        return(
        <div className={navbar.main__Container}>

        <div className={navbar.header}>
            <p className={navbar.menu__Options} onClick={redirectContact}> Contact</p>            
            <p onClick={redirectLogin} className={navbar.menu__Options}> Client log-in</p>            
            <p className={navbar.menu__Options} onClick={redirectGuide}> Guide</p>            
            </div>
            <h1 onClick={redirectHome} className={navbar.heading__Wrapper}>
            <AiOutlineCloudServer className={navbar.name__Logo} /> 
                Live Now
             </h1>
         <div className={navbar.main__Component}>                     
            <p className={navbar.menu__Options} onClick={redirectHome}>Home</p>
            <p className={navbar.menu__Options} onClick={redirectProducts}>Products</p>
            <p className={navbar.menu__Options} onClick={redirectAbout}>About Us</p>
            <p className={navbar.menu__Options} onClick={redirectWhy}>Why Livenow</p>
            </div>
            
        </div>

    )
}

export default Navbar 