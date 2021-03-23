import './List.css';
import { Link } from 'react-router-dom'; 


export default function List({product}){
    return (
        
            <div className="col-md-6 col-lg-4 column">
              <div className="card gr-1">
                <div className="txt">
                  <h1>{product.name} <br/>
                    {product.articleNo}</h1>
                  <p>{product.description}</p>
                </div>
                <Link to={`/products/${product.name}`}>more</Link>
                <div className="ico-card">
                <i className="fa fa-rebel"></i>
              </div>
              </div>
            </div>
          
    )
};

/* 


<a href="#!" className="list-group-item list-group-item-action flex-column align-items-start px-5 py-3">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{product.name}</h5>
            <small>{product.articleNo}</small>
          </div>
          <p className="mb-1">{product.description}</p>
          <small>{product.price}</small>
        </a>

 */