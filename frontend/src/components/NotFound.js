import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
    <>
        <h1>Page not found...</h1>
        <Link to="/login"> <button>Go to log in here</button></Link>
    </>
    ) 
}

export default NotFound;