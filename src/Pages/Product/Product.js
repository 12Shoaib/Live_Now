import product from './product.module.css'
import Navbar from '../../Components/Navbar.js/Navbar'
import ProductCard from '../../Atoms/productCard/ProductCard'
import {Data} from './../../Recoil/Data'
import { useRecoilValue } from 'recoil'
import ProductPoster from '../../Components/ProductPoster/ProductPoster'
import Frequentlyasked from '../../Components/Frequentlyasked/Frequently'
import Footer from '../../Components/Footer/Footer'

const Product = () => {
    const data = useRecoilValue(Data)
    return (
        <>
            <Navbar />
        <div className={product.main__Component}>
           {data.map((element) =>  <div key={element.Id}> <ProductCard element={element} /></div>)}
        </div>
            <ProductPoster />
        <div className={product.div1}>
        <Frequentlyasked /> 
        </div>
        <Footer />
        </>
    )
}

export default Product