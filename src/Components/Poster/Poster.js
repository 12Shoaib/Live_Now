import poster from './poster.module.css'
import Card from '../../Atoms/Card/Card'
import {BiSupport} from 'react-icons/bi'
import {FaServer} from 'react-icons/fa'
import {BsServer} from 'react-icons/bs'
import {IoTimer} from 'react-icons/io5'

const data = [ 
    {
        logo : <FaServer />,
        Title : 'Customers Server @ Scale',
        text :"Your project deserves the perfect setup. We provide 100% flexible hardware configurations to meet bespoke enterprise requirements. Fast, smart, and efficient."

    },
    {
        logo : <BiSupport/>,
        Title: 'Exceptional Support',
        text : 'Professional support directly from our server engineers. Typical response time: under 30 minutes. Were here when you need us. 24 hour, 7 days , 365 days.'
    },
    {
        logo: <BsServer />,
        Title:"Super Easy To Use",
        text: 'Our custom control panel is simple to use and removes the headache of managing your web hosting.With live now the web hosting is fun game now'
    },
    {
        logo: <IoTimer /> ,
        Title: "Fast & Reliable",
        text:'If your website is slow or down, then you are losing customers, conversion and search engine rankings, We are here to scale your buisness 10x'

    }
]

const Poster = () => {
    return(
        <div className={poster.main__Component}>
          {data.map((element) => <Card element = {element} />)}
        </div>
    )
}

export default Poster