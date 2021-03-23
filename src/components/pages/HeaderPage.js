import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';

import ProductsContext from "../../context/ProductsContext";
import UsersContext from "../../context/UsersContext";


  

function HeaderPage ({loggedIn}) {
    let history = useHistory();
    const { products } = useContext(ProductsContext);
    const [search, setSearch] = useState("");
    const { logout } = useContext(UsersContext);

    function Search (event) {
        event.preventDefault();
        let laptop = products.find(el => el.name === search)
        if (laptop) {
            return history.push(`/products/${laptop.name}`)
        } else alert('This Product is not exist');

    };
     
    

    return(
        <>
            <h1 id='header' className="display-2 App p-4">Shop Manager ;)</h1>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4" >
            
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className='nav-item'>
                            <NavLink to='/' className="nav-link" >Main</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/products' className="nav-link " >Our Products</NavLink>
                        </li>
                        <li className='nav-item'>
                            {loggedIn ? <p id='logout' className='nav-link' onClick={(e)=>{logout()}}>Log out</p> : <NavLink to='./login' className="nav-link " >Login</NavLink>} 
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/register' className="nav-link " >Register</NavLink>
                        </li>
                        
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex justify-content-end ">
                        <input className="form-control mr-sm-2 p-2" type="text" placeholder="Search" aria-label="Search" 
                            value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
                        <button className="btn btn-outline-secondary my-1 my-sm-1 p-2" type="submit" onClick={Search} >Search</button>
                    </form>
                </div>
            </nav>   

        </>
    )
};

export default HeaderPage;
/* 
<button className="btn btn-outline-success my-2 my-sm-0 p-2" type="submit" onClick={Search} >Search</button>
 */