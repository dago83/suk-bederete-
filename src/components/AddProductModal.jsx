import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/productSlice'

const AddProductModal = () => {
  const [show, setShow] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', price: '' })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title || !form.description || !form.price) return

    dispatch(addProduct({
      title: form.title,
      description: form.description,
      price: Number(form.price)
    }))

    setForm({ title: '', description: '', price: '' })
    setShow(false)
  }

  return (
    <>
      <button className="btn btn-primary mb-4" onClick={() => setShow(true)}>
        ➕ Add Product
      </button>

      {show && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Product</h5>
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price (ETB)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={form.price}
                      onChange={(e) => setForm({ ...form, price: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success">Add</button>
                  <button type="button" className="btn btn-secondary ms-2" onClick={() => setShow(false)}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default AddProductModal