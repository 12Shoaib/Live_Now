import design from './design.module.css'
import {BsShieldLock} from 'react-icons/bs'
import {TbFlipVertical} from 'react-icons/tb'
import {FaRegThumbsUp} from 'react-icons/fa'

const Design = () => {
    return(
        <div className={design.main__Component}>
        <span className={design.heading}>Included with every dedicated hosting</span>
        <div className={design.div1}>
            <span className={design.logo}><BsShieldLock /></span>
            <span className={design.heading2}>DDoS Protection</span>
            <span className={design.subheading}>Continue to serve your website visitors no matter what.</span>
        </div>
        <div className={design.div2}>
            <span className={design.logo}><TbFlipVertical /></span>
            <span className={design.heading2}>Unique IPv4 and IPv6</span>
            <span className={design.subheading}>Get an IPv4 address and future-proof your account with an unlimited number of free IPv6 addresses.</span>

        </div>
        <div className={design.div3}>
            <span className={design.logo}><FaRegThumbsUp /></span>
            <span className={design.heading2}>100% Network Uptime Guarantee</span>
            <span className={design.subheading}>We're so confident in our infrastructure that we back your site up with a 100% uptime guarantee.</span>

        </div>
    </div>
    )
}

export default Design