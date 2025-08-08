import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import CartTable from './components/CartTable'
import AddProductModal from './components/AddProductModal'

const App = () => {
  const products = useSelector(state => state.products.products)

  return (
    <div className="container mt-4">
      <Navbar />
      <AddProductModal />
      <h3 className="text-center mb-4">Available Products</h3>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map(product => (
          <div className="col" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <CartTable />
    </div>
  )
}

export default App