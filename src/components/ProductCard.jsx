import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/productSlice'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{product.description}</p>
        <p className="card-text"><strong>{product.price} ETB</strong></p>
        <button 
          className="btn btn-success"
          onClick={() => dispatch(addToCart(product.id))}
        >
         🛒 Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard