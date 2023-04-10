import productcard from './productcard.module.css'

const ProductCard = (props) => {
    return(
        <div  className={productcard.main__Component}>
            <h2 className={productcard.heading}>{props.element.name}</h2>
            <img src={props.element.image} className={productcard.image} />
            <h4 className={productcard.heading2}>{props.element.Server}</h4>
            <p className={productcard.sub_heading3}>{props.element.cores}</p>
            <p className={productcard.sub_heading1}>{props.element.HDD}</p>
            <p className={productcard.price}>{props.element.Price}</p>
            <p className={productcard.sub_heading2}>{props.element.timeToDeliver}</p>
            <p className={productcard.sub_heading2}>{props.element.contract}</p>
        </div>
    )

}

export default ProductCard