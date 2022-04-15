import React from 'react'
import styled from "styled-components";

// Styled components
const ErrorContainer = styled.div`
    border: 2px solid red;
    border-radius: 5px;
    background-color: rgba(255, 0, 0, 0.2);
    width: 100%;
    margin-top: 0.5rem;
`
const ErrorMessage = styled.p`
font-size: 1.4rem;
    margin-block: 0;
    margin-left: 0.5rem;
`


type Props = {
    errMsg: string
}

const FormAlert = ({errMsg}: Props) => {
  return (
    <ErrorContainer>
        <ErrorMessage>{errMsg}</ErrorMessage>
    </ErrorContainer>
  )
}

export default FormAlert