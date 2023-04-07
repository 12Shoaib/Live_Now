import navbar from './navbar.module.css'
import {AiOutlineCloudServer} from 'react-icons/ai'


const Navbar = () => {
    return(
        <div className={navbar.main__Container}>

        <div className={navbar.header}>
            <p className={navbar.menu__Options}> Contact</p>            
            <p className={navbar.menu__Options}> Client log-in</p>            
            <p className={navbar.menu__Options}> Guide</p>            
            </div>
            <h1 className={navbar.heading__Wrapper}>
            <AiOutlineCloudServer className={navbar.name__Logo} /> 
                Live Now
             </h1>
         <div className={navbar.main__Component}>                     
            <p className={navbar.menu__Options}>Home</p>
            <p className={navbar.menu__Options}>Hosting</p>
            <p className={navbar.menu__Options}>VPs</p>
            <p className={navbar.menu__Options}>About Us</p>
            <p className={navbar.menu__Options}>Why Livenow</p>
            </div>
            
        </div>

    )
}

export default Navbar 