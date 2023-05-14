import Home from './Components/Home.js/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './Pages/Product/Product'
import About from './Pages/About/About'
import  Contact from './Pages/Contact/Contact'
import Guide from './Pages/Guide/Guide'
import WhyUs from './Pages/WhyUs/WhyUs'
import SignIn from './Pages/SignIn/Signin'
import SignUp from './Pages/SignUp/SignUp'

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
      <Route path='/clientlogin' element={<SignIn />} />
      <Route path='/clientsignup' element={<SignUp />} />
    </Routes>
  </div>
)
}

export default App