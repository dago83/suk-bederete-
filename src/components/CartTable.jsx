import React from 'react'
import { useSelector } from 'react-redux'

const CartTable = () => {
  const cart = useSelector(state => state.products.cart)
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="mt-5">
      <h4>Cart</h4>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price} ETB</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h5 className="text-end">Total: <strong>{total} ETB</strong></h5>
        </>
      )}
    </div>
  )
}

export default CartTable