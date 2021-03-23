import './LoginPage.css'
import { useState, useContext } from "react";
import { NavLink } from 'react-router-dom'; 
import UserContext from "../../context/UsersContext";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function LoginPage (props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const {loggedIn, logout, setLoggedIn } = useContext(UserContext);
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();

        axios.post('https://computergroup.herokuapp.com/user/login', {username, password})
            .then((result) => {
            setUsername(username);
            cookies.set("TOKEN", result.data.token,{
                path: "/"});
            setLoggedIn(true);
            history.push("/products");
        })
            .catch( err => {
                err = new Error()
            })

    };

    const handleLogout = () => {
        logout();
    };

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    return (
    <>
        
        <div className="wrapper fadeInDown mt-5">
            <div id="formContent">

                <h1 className='mt-4'>Login</h1>
                {loggedIn ?   <p onClick={handleLogout}>Log out</p> : <p>you are not logged In</p>}

                <form onSubmit={handleLogin}>
                    <input type="text" id="login" className="fadeIn first mt-2" name="login" required value={username} placeholder="login" onChange={handleUsernameInput}></input>
                    <input type="password" id="password" className="fadeIn second" name="login" placeholder="password"  required value={password} onChange={handlePasswordInput} ></input>
                    <input type="submit" className="fadeIn fourth" value='Log in'></input>
                </form>

                <div id="formFooter">
                    <NavLink className="underlineHover" to='./register'> not registered ?</NavLink>
                    
                </div>

            </div>
        </div>

        </>
    )
};


export default LoginPage;