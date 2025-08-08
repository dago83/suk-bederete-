import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    { id: 1, title: 'Coffee Beans', description: 'Freshly ground coffee', price: 250 },
    { id: 2, title: 'Bread', description: 'Whole grain bread', price: 120 },
    { id: 3, title: 'Butter', description: 'Fresh butter', price: 180 },
    { id: 4, title: 'Sugar', description: 'Sugar', price: 150 },
  ],
  cart: [],
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(p => p.id === action.payload)
      if (product) {
        state.cart.push(product)
      }
    },
    addProduct: (state, action) => {
      const newId = Math.max(...state.products.map(p => p.id)) + 1
      state.products.push({ id: newId, ...action.payload })
    }
  }
})

export const { addToCart, addProduct } = productSlice.actions
export default productSlice.reducer