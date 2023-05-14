import button from './button.module.css'

const Button = ({name , onClick}) => {
    return(
        <div className={button.main__Component}>
        
        <button onClick={onClick} className={button.button_style}>{name}</button>

        </div>
    )


}

export default Button