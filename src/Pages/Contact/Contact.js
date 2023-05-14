import { useState } from 'react'
import {AiOutlineCloudServer} from 'react-icons/ai'
import contact from './contact.module.css'
import Navbar from '../../Components/Navbar.js/Navbar'

const Contact = () => {
        const [formData , setFormData] = useState({})
        const [popUp , setPopUp] = useState(false)

        const inputCapture = (event) => {
            const {name , value} = event.target
            setFormData({
                ...formData,
                [name]:value
            })
        }
        const handleSubmitBtn = () => {
            setFormData({})
            setPopUp(true)
        }
    return (
        <>
            <Navbar />
        <div className={contact.main__Component}>
           <div>
                <h1 className={contact.logo}><AiOutlineCloudServer className={contact.icon}/>Live Now</h1>
                <p className={contact.sub_heading}>Solution for all your hosting problems , feel free to get in touch</p>
           </div>
            <div>
            <h1 className={contact.heading}>Get in touch </h1>
            <div className={contact.contact_card}>
                <label className={contact.label} for='userName'>Name</label>
                <input value={formData?.userName || ""} onChange={inputCapture} name='userName' className={contact.input_field} placeholder='@yourName...' type='text' id='userName' required />
                <label className={contact.label} for='email'>Email</label>
                <input value={formData?.email || ""} onChange={inputCapture} name='email' className={contact.input_field} placeholder='@yourName...' type='email' id='email' required/>
                <label className={contact.label} for='message'>Mesasage</label>
                <textarea value={formData?.message || ""} onChange={inputCapture} name='message' className={contact.input_field_message } placeholder='Enter your Message...' type='text' id='message' required/>
               {popUp && <p className={contact.popup_message} >We have successfully recieved your message , our team will connect you soon</p>}
                <button onClick={handleSubmitBtn} className={contact.button}>Submit</button>
            </div>
            </div>
        </div>
        </>
    )
}
export default Contact