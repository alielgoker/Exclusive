import {  Container} from '@chakra-ui/react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import ToTop from './components/ToTop'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/signUp'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import { CheckOute } from './pages/CheckOute'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
function App() {
  return (
    <>
      < Header />
    <Container maxW="1600" marginTop={"100px"} >
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={< Login />} />
        <Route path='/signup' element={< SignUp />} />
        <Route path='/product/:id' element={< Product/>} />
        <Route path='/wishlist' element={< WishList />} />
        <Route path='/cart' element={< Cart />} />
        <Route path='/checkout' element={< CheckOute />} />
        <Route path='/profile' element={< Profile />} />
        <Route path='/about' element={< About />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/404' element={< NotFound />} />
      </Routes>
      < ToTop />
    </Container>
    < Footer />
  </>
  )
}

export default App
