import React from "react";
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <>
        <div className="log-in-div">
        <h1>Welcome</h1>
        <form>
            <label>Register here:</label>
            <input className="user-name-input" type="text" placeholder="Username"></input>
            <input className="password-input" type="text" placeholder="Password"></input>
            <input className="firstName" type="text" placeholder="First Name"></input>
            <input className="email" type="text" placeholder="email"></input>


            <button type="submit">Submit</button>
        </form>

        <Link to={"/"}>Already registered? Log in</Link>
        </div>
        </>
    )
}

export default Register