
import './App.css'
import About from './components/About'
import AboutTools from './components/AboutTools'
import Banner from './components/Banner'
import Nav from './components/Nav'
import AvilableProducts from './components/AvailableProducts'
import { Suspense } from 'react'

const fetchProducts = async () => {
  const res = await fetch('/product.json')
  const data = await res.json()
  return data
}
const productPromise = fetchProducts();

function App() {

  return (
    <>
      <Nav />
      <Banner />
      <About />
      <Suspense fallback={<div>Loading products...</div>}>
        <AboutTools productPromise={productPromise} />
      </Suspense>
    </>
  )
}

export default App
