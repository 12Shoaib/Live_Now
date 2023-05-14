import input from './input.module.css'

const Input = ({placeholder , type}) => {
    return (
        <div className={input.main__Component}>
            <input className={input.input_Field} placeholder={placeholder} type={type} required/>

        </div>
    )
}

export default Input