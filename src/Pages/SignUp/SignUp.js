import { BsApple } from 'react-icons/bs'
import { AiOutlineCloudServer } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc' 
import { useNavigate } from 'react-router-dom'
import signup from './signup.module.css'
import Input from '../../Atoms/Input/Input'
import Button from '../../Atoms/Buttons/Button'

const SignUp = () => {
        const navigate = useNavigate()
        const handleLoginBtn = () => {
            navigate('/clientlogin')
        }
    return (
        <div className={signup.container}>
        <div className={signup.wrapper}>
            <AiOutlineCloudServer className={signup.icon_wrapper_One}/>
            Livenow
        </div>
        <div className={signup.wrapper_two}>
        <div className={signup.signin_card}>
                <h1 className={signup.heading}>SignUp </h1>
                <div className={signup.siginOptions}><FcGoogle className={signup.icon} />Signup with Google</div>
                <div className={signup.siginOptions}><BsApple  className={signup.icon} />Signup with Apple</div>
                <Input type='text' placeholder='@Fullnaame' />
                <Input type='password' placeholder='@Password' />
                <Input type='password' placeholder='@Confirmpassword' />
                <Button name ="Register" />
                <p className={signup.text_one}>Already a user? <span onClick={handleLoginBtn} className={signup.highlighter}>Log in</span></p>
            </div>

        </div>

    </div>
    )
}

export default SignUp