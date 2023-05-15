import input from './input.module.css'

const Input = ({placeholder , type , onChange , name}) => {
    return (
        <div className={input.main__Component}>
            <input name={name} onChange={onChange} className={input.input_Field} placeholder={placeholder} type={type} required/>

        </div>
    )
}

export default Input