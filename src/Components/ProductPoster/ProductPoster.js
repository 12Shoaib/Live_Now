import productposter from './productposter.module.css'
import { FaRegThumbsUp } from 'react-icons/fa'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { FiTool } from 'react-icons/fi'
import { SiArtixlinux } from 'react-icons/si'
import { BsShieldLock } from 'react-icons/bs'
import { TbFlipVertical } from 'react-icons/tb'

const data = [
    {
        icon: <FaRegThumbsUp />,
        title: '100% Network Uptime Guarantee',
        text: `We're so confident in our infrastructure that we back your site up with a 100% uptime guarantee.`
    },
    {
        icon: <MdOutlineSupportAgent />,
        title: '24x7 Tech Support & Server Monitoring',
        text: 'Rest easy knowing your servers are under constant monitoring by our in-house experts.'
    },
    {
        icon: <FiTool />,
        title: 'Full Root & Shell Access (SSH)',
        text: 'Live the command-line life. Gain secure remote access and get down to business.'
    },
    {
        icon: <SiArtixlinux />,
        title: 'Ubuntu Linux',
        text: 'A familiar industry standard ready to go to work for you.'
    },
    {
        icon: <BsShieldLock />,
        title: 'DDoS Protection',
        text: 'Continue to serve your website visitors no matter what.'
    },
    {
        icon: <TbFlipVertical />,
        title: `Unique IPv4 and IPv6`,
        text: 'Get an IPv4 address and future-proof your account with an unlimited number of free IPv6 addresses.'
    }
]

const ProductPoster = () => {
    return (
        <div className={productposter.main__Component}>
            <span className={productposter.heading}>Included with every dedicated hosting</span>
            <div className={productposter.div1}>
                <span className={productposter.logo}><BsShieldLock /></span>
                <span className={productposter.heading2}>DDoS Protection</span>
                <span className={productposter.subheading}>Continue to serve your website visitors no matter what.</span>
            </div>
            <div className={productposter.div2}>
                <span className={productposter.logo}><TbFlipVertical /></span>
                <span className={productposter.heading2}>Unique IPv4 and IPv6</span>
                <span className={productposter.subheading}>Get an IPv4 address and future-proof your account with an unlimited number of free IPv6 addresses.</span>

            </div>
            <div className={productposter.div3}>
                <span className={productposter.logo}><FaRegThumbsUp /></span>
                <span className={productposter.heading2}>100% Network Uptime Guarantee</span>
                <span className={productposter.subheading}>We're so confident in our infrastructure that we back your site up with a 100% uptime guarantee.</span>

            </div>
        </div>
    )
}

export default ProductPoster