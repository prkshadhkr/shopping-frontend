import React, { useState } from 'react';


const ShippingForm = ({ order_id, save } ) => {
  const initialValue = {
		order_id,
    address: "",
    city: "",
    zip_code: ""
  };
  const [formData, setFormData] = useState(initialValue);
  const handleSubmit = e => {
    e.preventDefault();
    save(formData);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(d => ({
      ...d,
      [name]: value
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
          <div className="form-group row">
						<label htmlFor="for-address" className="col-sm-2">Address</label>
							<div className="col-sm-10">
								<input 
									id="for-address"
									name="address"
									value={formData.address}
									onChange={handleChange}
									className="form-control"/>
							</div>
					</div>
          <div className="form-group row">
						<label htmlFor="for-city" className="col-sm-2">City</label>
							<div className="col-sm-10">
								<input 
									id="for-city"
									name="city"
									value={formData.city}
									onChange={handleChange}
									className="form-control"/>
							</div>
					</div>
          <div className="form-group row">
						<label htmlFor="for-zip_code" className="col-sm-2">Zip code</label>
							<div className="col-sm-10">
								<input 
									id="for-zip_code"
									name="zip_code"
									value={formData.zip_code}
									onChange={handleChange}
									className="form-control"/>
							</div>
					</div>

          <button 
						type="submit"
						className="btn btn-outline-primary float-right"
					>
						Add Shipping
					</button>
        </form>
    </div>
  )
}

export default ShippingForm;