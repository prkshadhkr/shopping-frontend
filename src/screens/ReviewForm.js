import React, { useState } from 'react';

const ReviewForm = ({ submitReview }) => {
  const initialValue = {
    title: "",
    rating: "",
    comment: ""
  }
  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    submitReview(formData.title, formData.rating, formData.comment);
    setFormData(initialValue);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(d => ({
      ...d,
      [name]: value
    }));
  }

  return (
		<div>
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit} >
          <div className="form-group row">
						<label htmlFor="for-title" className="col-sm-2">Title</label>
							<div className="col-sm-10">
								<input 
									id="for-title"
									name="title"
									value={formData.title}
									onChange={handleChange}
									className="form-control"/>
							</div>
					</div>
          <div className="form-group row">
						<label htmlFor="for-rating" className="col-sm-2">Rating</label>
							<div className="col-sm-10">
								<input 
									id="for-rating"
									type="number"
									name="rating"
									value={formData.rating}
									onChange={handleChange}
									className="form-control"/>
							</div>
					</div>
          <div className="form-group row">
						<label htmlFor="for-comment" className="col-sm-2">Comment</label>
							<div className="col-sm-10">
								<textarea 
									id="for-comment"
									name="comment"
									value={formData.comment}
									onChange={handleChange}
									className="form-control"/>
							</div>
					</div>

          <button 
						type="submit"
						className="btn btn-outline-primary float-right"
					>
						  Add review
					</button>
        </form>
      </div>
    </div>
		</div>
  )
}

export default ReviewForm;