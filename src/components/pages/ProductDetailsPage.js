import { useParams, Link } from 'react-router-dom';
import { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";



function ProductDetailsPage () {
    const { search } = useParams();
    const { products } = useContext(ProductsContext);
    const product = products.find(el => el.name === search)
    return (
        <>
        <Link to="#!" className="list-group-item list-group-item-action flex-column align-items-start px-5 py-3">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{product.name}</h5>
            <small>{product.articleNo}</small>
          </div>
          <p className="mb-1">{product.description}</p>
          <small>{product.price}</small>
        </Link>
        </>
    );
};

export default ProductDetailsPage;