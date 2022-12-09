import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
    <>
        <h1>Not Found...</h1>
        <Link to="/login"> <button>GO TO LOGIN</button></Link>
    </>
    ) 
}

export default NotFound;