
import './App.css'
import About from './components/About'
import AboutTools from './components/AboutTools'
import Banner from './components/Banner'
import Nav from './components/Nav'
import AvilableProducts from './components/AvailableProducts'
import { Suspense, useState } from 'react'
import Steps from './components/Steps'
import Footer from './components/Footer'
import Pricings from './components/Pricings'

const fetchProducts = async () => {
  const res = await fetch('/product.json')
  const data = await res.json()
  return data
}
const productPromise = fetchProducts();

function App() {
    const [selectedCarts, setSelectedCarts] = useState([]);


  return (
    <>
      <Nav selectedCarts={selectedCarts} />
      <Banner />
      <About />
      <Suspense fallback={<div>Loading products...</div>}>
        <AboutTools selectedCarts={selectedCarts} setSelectedCarts={setSelectedCarts} productPromise={productPromise} />
      </Suspense>
      <Steps />
      <Pricings />
      <Footer />
    </>
  )
}

export default App
