import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled';
import H1 from './components/H1'
import Form from './components/Form';
import Container from './components/Container';
import Tasks from './components/Tasks';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 1000px;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    margin: 0 auto;

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 4rem;
    }
`



const TodoApp = () => {
    const currentTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const [tasks, setTasks] = useState(currentTasks);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])

    return (
        <>
            <H1 text="Todo App" />
            <Wrapper>

                <Container>
                    <Form 
                        tasks={ tasks }
                        setTasks={ setTasks }
                    />
                </Container>
                <Container >
                    <Tasks
                        tasks={ tasks }
                        setTasks={ setTasks }
                    />
                </Container>

            </Wrapper>
        </>
    )
}

export default TodoApp
