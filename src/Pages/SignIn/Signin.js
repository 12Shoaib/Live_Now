import { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { AiOutlineCloudServer } from 'react-icons/ai'
import Input from '../../Atoms/Input/Input'
import Button from '../../Atoms/Buttons/Button'
import signin from './signin.module.css'


const SignIn = () => {
    const [formData , setFormData] = useState({})
    const navigate = useNavigate()
    const handleregisterPage = () => {
        navigate('/clientsignup')
    }
    const formInputs = (event) => {
        const {name , value} = event.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    return(    
        <div className={signin.container}>
            <div className={signin.wrapper}>
                <AiOutlineCloudServer className={signin.icon_wrapper_One}/>
                Livenow
            </div>
            <div className={signin.wrapper_two}>
            <div className={signin.signin_card}>
                    <h1 className={signin.heading}>Log in </h1>
                    <div className={signin.siginOptions}><FcGoogle className={signin.icon} />SignIn with Google</div>
                    <div className={signin.siginOptions}><BsApple  className={signin.icon} />Sign in with Apple</div>
                    <Input name='userName' onChange={formInputs} type='text' placeholder='@YourName' />
                    <Input name='userPassword' onChange={formInputs} type='password' placeholder='@Password' />
                    <p className={signin.text}>Forget Password</p>
                    <Button name ="Submit" />
                    <p className={signin.text_one}>Don't have an account? <span onClick={handleregisterPage} className={signin.highlighter}>Register here</span></p>
                </div>

            </div>

        </div>
    )
}

export default SignIn