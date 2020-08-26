import React , { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../action/titles';
import AddRemoveIcons from './AddRemoveIcons';

const Products =  () => {
  const products = useSelector(st => st.titles.products);
  const dispatch = useDispatch();
	useEffect( () => {
	 dispatch(fetchProducts())
  }, [ dispatch ]);

  console.log(products)

  const productLists = products.map(p => (
    <div key={p.id} className="col-md-2 mb-2">
      <div className="card">
        <div className="card-body">
        <Link to={`products/${p.id}`}>
          <h6 className="card-title text-center">
              {p.name}
          </h6>
          <img style={{width:"100%", height:"100%", objectFit:"contain"}}
            className="Products-img card-img-center"
            src={p.image} alt={p.name} />
        </Link>
        <AddRemoveIcons id={p.id}/>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <h5 className="text text-alignment-center">Chek these out!</h5>
      <div className="row">
        { productLists }
      </div>
    </>
  )
}

export default Products;