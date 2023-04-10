import product from './product.module.css'
import Navbar from '../../Components/Navbar.js/Navbar'
import ProductCard from '../../Atoms/productCard/ProductCard'
import {Data} from './../../Recoil/Data'
import { useRecoilValue } from 'recoil'
import ProductPoster from '../../Components/ProductPoster/ProductPoster'

const Product = () => {
    const data = useRecoilValue(Data)
    return (
        <>
            <Navbar />
            <ProductPoster />
        <div className={product.main__Component}>
           {data.map((element) =>  <div key={element.Id}> <ProductCard element={element} /></div>)}
        </div>
        </>
    )
}

export default Product