import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddRemoveIcons from './AddRemoveIcons';
import { getProductFromAPI }from '../action/reviews';

const ProductDetails = () => {
  const { id } = useParams();
  const pId = Number(id);
  const product = useSelector(st => st.reviews[pId]);
  const dispatch = useDispatch();

  useEffect (() => {
    const  getProduct =  () => {
      dispatch(getProductFromAPI(pId));
    } 
    if (!product) {
      getProduct();
    }
  }, [ dispatch, pId, product]);

  if(!product) return <p>Loading...</p>;

  return (
    <div className="row justify-content-center">
      <div className="ProductDetails col-md-4">
        <h5> { Object(product).name } </h5>
        <img style={{width: "100%", height: "30vw", objectFit: "contain"}}
          className="productDetails-img card-img-top"
          src={Object(product).image}
          alt={Object(product).name}
        />
        <div>
          <h6>{ Object(product).description }</h6>
          <p>Unit Price: ${ Object(product).price }</p>
          < AddRemoveIcons id={id} />
          <div>
            <p> Rating: {Object(product).rating } reviews: { Object(product).num_reviews }</p>
          </div>
          <Link to="/products">
            <h6>Back</h6>
          </Link>
          <div>
            <Link to={`/products/${id}/reviews`} > Comments / Reviews </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;





// const ProductDetails = () => {
//   const { id } = useParams();
//   // const product = useSelector(st => 
//   //   st.products.products.find(el => el.id === +id)
//   // );
//   const pId = Number(id);
//   const product = useSelector(st => st.reviews[pId]);
//   const dispatch = useDispatch();

//   useEffect (() => {
//     const  getProduct =  () => {
//       dispatch(getProductFromAPI(pId));
//     } 
//     if (!product) {
//       getProduct();
//     }
//   }, [ dispatch, pId, product]);



//   return (
//     <div className="row justify-content-center">
//       <div className="ProductDetails col-md-4">
//         <h5> { product["name"] } </h5>
//         <img style={{width: "100%", height: "30vw", objectFit: "contain"}}
//           className="productDetails-img card-img-top"
//           src={product.image}
//           alt={product.name}
//         />
//         <div>
//           <h6>{ product.description }</h6>
//           <p>Unit Price: ${ product.price }</p>
//           < AddRemoveIcons id={id} />
//           <div>
//             <p> Rating: {product.rating } reviews: { product.num_reviews }</p>
//           </div>
//           <Link to="/products">
//             <h6>Back</h6>
//           </Link>
//           <div>
//             <Link to={`/products/${id}/reviews`} > Comments / Reviews </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )