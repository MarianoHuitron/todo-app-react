import React from 'react'
import styled from '@emotion/styled';

const H1Element = styled.h1`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2rem 0;
    color: #fff;
    font-weight: bold;
`


const H1 = ({ text }) => (
    <H1Element> {text} </H1Element>
);

export default H1
