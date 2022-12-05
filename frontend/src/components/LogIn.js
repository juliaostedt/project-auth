import React from "react";

const LogIn = () => {
    return(
        <>
        
        <div className="log-in-div">
        <h1>Welcome</h1>
        <form>
            <label>Please log in below</label>
            <input className="user-name-input" type="text" placeholder="Username"></input>
            <input className="password-input" type="text" placeholder="Password"></input>
            <button type="submit">Submit</button>
        </form>

        <a href="newlink">Register here</a>
        </div>
        </>
    )
}

export default LogIn