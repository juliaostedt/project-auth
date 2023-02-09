import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import user from "reducers/user";
import { StyledButton, StyledSection, OuterWrapper, StyledHeading } from "../GlobalStyles"


const Content = () => {
    const accessToken = useSelector((store) => store.user.accessToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const logout = () => {
        dispatch(user.actions.setAccessToken(null));
    };

    useEffect(() => {
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
        }
    });

    return (
        <OuterWrapper>
            <StyledSection>
                <StyledHeading>You are now logged in</StyledHeading>
                <p>This is a secret message</p>
                <Link to="/login"> <StyledButton type="button" onClick={() => dispatch(user.actions.setAccessToken(null))}>Sign Out</StyledButton></Link>
            </StyledSection>
        </OuterWrapper>
    )
}

export default Content;