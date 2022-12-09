import React, { useEffect } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import user from "reducers/user";


const Content = () => {
    const accessToken = useSelector((store) => store.user.accessToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const logout = () => {
      dispatch(user.actions.setAccessToken(null));
    };

    useEffect( () => {
        if (!accessToken) {
            navigate("/login");
        }
    }, []);
    
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            }
}});

    return (
        <>
        <div className="log-in-div">
        <h1>You are now logged in</h1>
        <label>This is a secret message</label>
        <Link to="/login"> <button type="button" onClick={() => dispatch(user.actions.setAccessToken(null))}>Sign Out</button></Link>
        </div>
        </>
    )
}

export default Content;