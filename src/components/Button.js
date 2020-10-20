import React from 'react'
import styled from '@emotion/styled';

const ButtonElement = styled.button`
    width: 100%;
    margin-top: 1rem;
    padding: .5rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #e056fd;
    border: 2px solid #e056fd;
    color: #fff;

    transition: background-color .3s ease;

    &:hover {
        cursor: pointer;
        background-color: #e070fd;
    }

    &:focus {
        outline: none;
    }
`


const Button = ({text, type}) => {
    return (
        <ButtonElement type={type} >
            {text}
        </ButtonElement>
    )
}

export default Button
