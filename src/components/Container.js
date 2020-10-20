import React from 'react'
import styled from '@emotion/styled';

const ContainerDiv = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;

    @media (min-width: 768px) {
        margin: 1rem;
    }

`

const Container = ({children}) => {
    return (
        <ContainerDiv>
            {children}
        </ContainerDiv>
    )
}

export default Container
