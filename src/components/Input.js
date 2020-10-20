import React from 'react'
import styled from '@emotion/styled';

const InputField = styled.input`
    width: 100%;
    border: 2px solid violet;
    padding: .5rem;
    font-size: 1.2rem;

    &:focus {
        outline: none;
    }
`

const Input = ({...props}) => {
    return (
        <InputField
            {...props}
        />
    )
}

export default Input
