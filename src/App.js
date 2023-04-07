import Home from './Components/Home.js/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './Pages/Product/Product'
import About from './Pages/About/About'
import  Contact from './Pages/Contact/Contact'
import Guide from './Pages/Guide/Guide'
import WhyUs from './Pages/WhyUs/WhyUs'

const App = () => {
return (
  <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Product' element={<Product />} />
      <Route path='/Guide' element={<Guide/>} />
      <Route path='/WhyUs' element={<WhyUs />} />
    </Routes>
  </div>
)
}

export default App