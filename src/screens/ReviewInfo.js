import React, { useContext } from 'react';
import UserContext from '../user/UserContext';

const ReviewInfo = ({ id, title, rating, comment, deleteReview }) => {
  const { user } = useContext(UserContext);
  const handleDelete = e =>{
    deleteReview(id);
  }

  return (
    <div>
      <p>
        { user.is_admin ?
          (deleteReview && (
            <i 
            className="fa fa-times text-danger mr-2"
            onClick={handleDelete}
              />
          )): ""
        }
        <b>{ title }</b><br/>
        <small>{ rating } out of 5 </small><br/>
        {comment}
      </p>
    </div>
  )
}

export default ReviewInfo;