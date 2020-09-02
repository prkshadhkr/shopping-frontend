import React, { useState } from 'react';
// import Alert from '../Alert';

/** We could use the same form to create and update a product */
const ProductForm = ({product, save, cancel }) => {
  const [formData, setFormData] = useState({
    name: product.name,
    image: product.image,
    brand: product.brand,
    price: product.price,
    category: product.category,
    count_in_stock: product.count_in_stock,
    description: product.description,
  });
  
  const handleSubmit = e => {
    e.preventDefault();
    save(formData);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(d => ({
      ...d,
      [name]: value
    }));
  }

  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="for-name" 
            className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              id="for-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="for-image" 
            className="col-sm-2 col-form-label">Image</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              id="for-image"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
        </div>  
        <div className="form-group row">
          <label htmlFor="for-brand" 
            className="col-sm-2 col-form-label">Brand</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              id="for-brand"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
        </div> 
        <div className="form-group row">
          <label htmlFor="for-price" 
            className="col-sm-2 col-form-label">Price</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              id="for-price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
        </div>  
        <div className="form-group row">
          <label htmlFor="for-category" 
            className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              id="for-category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
        </div> 
        <div className="form-group row">
          <label htmlFor="for-count_in_stock" 
            className="col-sm-2 col-form-label">In stock</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              id="for-count_in_stock"
              type="number"
              name="count_in_stock"
              value={formData.count_in_stock}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="for-description" 
            className="col-sm-2 col-form-label">Description</label>
          <div className="col-sm-10">
            <input 
              className="form-control"
              id="for-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* { error ? (
            <Alert type="danger" msg={formData.errors} />
          ): null
        } */}

        <button
          className="btn btn-outline-primary float-right"
        > Save </button>
        <button 
          onClick={cancel}
          className="btn btn-outline-danger mr-2 float-right "
        > Cancel </button>
      </form>
    </>
  );
}

ProductForm.defaultProps = {
  product: {
    name: "",
    image: "",
    brand: "",
    price: "",
    category: "",
    count_in_stock: "",
    description: ""
  }
}

export default ProductForm;