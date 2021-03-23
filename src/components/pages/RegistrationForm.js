import './LoginPage.css'
import { useState } from "react";
import { NavLink } from 'react-router-dom'; 
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

function RegistrationForm (props) {
    const [ state, setState ] = useState({
        username : '',
        email : '',
        password : '',
        confirmPassword : ''
    })
    
    const handleChange = (event) => {
        const { id, value } = event.target
        setState( prevState => ({
            ...prevState,
            [id] : value
        }))
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            const newUser = {
                id: uuidv4(),
                username: state.username,
                email: state.email,
                password: state.password
            }
            axios.post('https://computergroup.herokuapp.com/user/register', newUser)
            .then(alert('you have succeeded registered'))
            .catch( err => {
                err = new Error()
            })    
        } else {
            alert("Passwords don't match");
        }
    }

    return (
    <>
        
        <div className="wrapper fadeInDown mt-1">
            <div id="formContent">

                <h1 className='mt-4'>Register</h1>
                {props.loggedIn ? <p>Logged In</p> : <p>Not Registered</p>}

                <form>
                    <input type="text" id="username" className="fadeIn first mt-2" name="username" required placeholder="Username" value={state.username}
                       onChange={handleChange}></input>
                    <input type="text" id="email" className="fadeIn first mt-2" name="email" required placeholder="E-mail" value={state.email}
                       onChange={handleChange}></input>
                    <input type="password" id="password" className="fadeIn second" name="login" placeholder="Password"  required value={state.password}
                        onChange={handleChange} ></input>
                    <input type="password" id="confirmPassword" className="fadeIn third" name="login" placeholder="Confirm Password"  required value={state.confirmPassword}
                        onChange={handleChange} ></input>
                    <input type="submit" className="fadeIn fourth" value="Register" onClick={handleSubmitClick} ></input>
                </form>

                <div id="formFooter">
                    <NavLink className="underlineHover" to="/login">Already registered?</NavLink>
                </div>

            </div>
        </div>

        </>
    )
};


export default RegistrationForm;