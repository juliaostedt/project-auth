import React from "react";
import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-family: 'Julius Sans One', sans-serif;
  font-size: 2em;
  text-align: center;
`

export const OuterWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5em;
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #D0C9C0;
  border-radius: 30px;
  width: 70vw;
  min-height: 25vh;

@media (min-width: 667px) and (max-width: 1024px) {
    width: 40vw;
}
@media (min-width: 1024px) {
    width: 20vw;
}
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1em;
`

export const StyledButton = styled.button`
  font-family: 'Archivo Narrow', sans-serif;
  font-size: 1.2em;
  background: #6D8B74;
  border-radius: 20px;
  margin: 2rem;
  padding: .4em;
  border: none;

  &:hover {
  background: white;
  color: #5F7161;
  }
`