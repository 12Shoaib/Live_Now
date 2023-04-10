import card from './card.module.css'

const Card = (props) => {
    return(
        <div className={card.main__Component}>
            <h1 className={card.logo}>{props.element.logo}</h1>
            <h4 className={card.title}>{props.element.Title}</h4>
            <span className={card.text}> {props.element.text}</span>
        </div>
    )
}

export default Card