import React from 'react'
import styled from '@emotion/styled';

const P = styled.p`
    color: #fff;
    background-color: #ff7979;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding: .5rem;
    margin-bottom: .5rem;
    text-align: center;
`


const Error = ({ text }) => {
    return (
        <P>
            {text}
        </P>
    )
}

export default Error
