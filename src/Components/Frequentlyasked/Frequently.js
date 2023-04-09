import frequently from './frequently.module.css'
import {useState} from 'react'
import {FaPlus} from 'react-icons/fa'

const data = [
    {
        question : 'What is Web Hosting ?',
        answer : `Web hosting allows businesses, organizations, and individuals to make their websites or apps visible on the internet. Whether they're using a dedicated server, or sharing resources, every website is hosted on a server. The only way for a website to be visible on the internet is if it's hosted by a web hosting service provider, also known as a web host. In order to find a website, you type the domain name (or URL) into your browser. Your computer will then connect to the server where the website is hosted, and the webpage is delivered onto your screen.`
    },
    {
        question:'How Do I Buy a Domain Name?',
        answer : `Buying a domain name with Livenow is simple and comes with features that a lot of other hosts don't offer. Use our domain search tool to buy your desired domain name; we'll let you know if someone else has already purchased it, and will serve up alternative versions that are available.`
    },
    {
        question: 'What are all services your providing ?',
        answer : 'Currently we are a Saas (Software as a Service) Company services you can checkout our products, Live now is providing free 7days of trail grab it and check your business realiability.  '
    },
    {
        question: `Can I Talk to Support Even If I'm Not a Current Customer?`,
        answer:`Of course! Visit our bot  Or, if you're on our site between 11-4 PM IST, you can chat with us from any of our product pages .`
    }
]


const Frequently = () => {
    const [show , setShow] = useState(false)
    const [show1 , setShow1] = useState(false)
    const [show2 , setShow2] = useState(false)
    const [show3 , setShow3] = useState(false)
    const [ filteredData , setFilteredData] = useState([data])

    const toggleButton = () => {
        setShow((prev) => !prev)
    }
    const toggleButton1 = () => {
        setShow1((prev) => !prev)
    }
    const toggleButton2 = () => {
        setShow2((prev) => !prev)
    }
    const toggleButton3 = () => {
        setShow3((prev) => !prev)
    }

    return(
        <div className={frequently.main__Component}>
            <h1 className={frequently.heading}>Frequently Asked questions</h1>
             <div onClick={() => toggleButton()} className={frequently.question_Wrapper}>
                <h2 className={frequently.heading_Wrapper}>What is Web Hosting ?<span className={frequently.logo}> <FaPlus /></span></h2>  
               {show && <span className={frequently.answer}>Web hosting allows businesses, organizations, and individuals to make their websites or apps visible on the internet. Whether they're using a dedicated server, or sharing resources, every website is hosted on a server. The only way for a website to be visible on the internet is if it's hosted by a web hosting service provider, also known as a web host. In order to find a website, you type the domain name (or URL) into your browser. Your computer will then connect to the server where the website is hosted, and the webpage is delivered onto your screen.</span>}
            </div>
            <div onClick={() => toggleButton1()} className={frequently.question_Wrapper}>
                <h2 className={frequently.heading_Wrapper}>How Do I Buy a Domain Name?<span className={frequently.logo}> <FaPlus /></span></h2>  
               {show1 && <span className={frequently.answer}>Buying a domain name with Livenow is simple and comes with features that a lot of other hosts don't offer. Use our domain search tool to buy your desired domain name; we'll let you know if someone else has already purchased it, and will serve up alternative versions that are available.</span>}
            </div>
            <div onClick={() => toggleButton2()} className={frequently.question_Wrapper}>
                <h2 className={frequently.heading_Wrapper}>What are all services your providing ?<span className={frequently.logo}> <FaPlus /></span></h2>  
               {show2 && <span className={frequently.answer}>Currently we are a Saas (Software as a Service) Company services you can checkout our products, Live now is providing free 7days of trail grab it and check your business realiability.</span>}
            </div>
            <div onClick={() => toggleButton3()} className={frequently.question_Wrapper}>
                <h2 className={frequently.heading_Wrapper}>Can I Talk to Support Even If I'm Not a Current Customer?<span className={frequently.logo}> <FaPlus /></span></h2>  
               {show3 && <span className={frequently.answer}>Of course! Visit our bot  Or, if you're on our site between 11-4 PM IST, you can chat with us from any of our product pages .</span>}
            </div>
        </div>
    )
}

export default Frequently