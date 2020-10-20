import React from 'react'
import styled from '@emotion/styled';

const H2Element = styled.h2`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2rem 0;
    color: #fff;
    font-weight: bold;
`

const H2 = ({text}) => {
    return (
        <H2Element>
            {text}
        </H2Element>
    )
}

export default H2
