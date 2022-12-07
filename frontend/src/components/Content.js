import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const Content = () => {

    const navigate = useNavigate();

    const navigateToLogIn = () => {
        navigate('/')
    };

    return(
        <div className="log-in-div">
        <h1>You are now loged in</h1>
            <label>This is secret content</label>
            <button type="button" onClick={navigateToLogIn}>Sign out</button>
        </div>
    )
}

export default Content

//            <Link to="/" className="btn btn-primary">Sign out</Link>