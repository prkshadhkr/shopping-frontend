import {
  FETCH_PRODUCT,
  ADD_REVIEW,
  REMOVE_REVIEW,
  ERROR
} from '../constants/actionTypes';

const rootReducer = ( state = { }, action ) => {
  let p = state[action.pId];
  switch(action.type){
    case FETCH_PRODUCT:
      return { ...state, [action.product.id]: action.product };
  
    case ADD_REVIEW:
      return {
        ...state,
        [action.pId]: {
          ...p, 
          reviews: [ 
            ...p.reviews,
            { 
              title:   action.title,
              rating:  action.rating,
              comment: action.comment
            }
          ]       
        }
      }
    
    case REMOVE_REVIEW:
      return {
        ...state,
        [action.pId]: {
          ...p,
          reviews: p.reviews.filter(r => r.id !== action.rId)
        }
      };

    case ERROR:
      return { ...state, error: true};

    default:
      return state; 
  }
}

export default rootReducer;