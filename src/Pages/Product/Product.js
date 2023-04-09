import product from './product.module.css'
import Navbar from '../../Components/Navbar.js/Navbar'
import ProductCard from '../../Atoms/productCard/ProductCard'

const Product = () => {
    return (
        <>
            <Navbar />
        <div className={product.main__Component}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
        </>
    )
}

export default Product