import React from 'react'
import styled from '@emotion/styled';

const TaskContainer = styled.div`
    background-color: #fff;
    margin-bottom: .5rem;
    padding: .8rem;
    color: teal;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
   

    &:first-of-type {
        margin-top: .5rem;
    }

    @media (min-width: 768px) {
        &:first-of-type {
            margin-top: 0;
        }
    }
`

const P = styled.p`
    cursor: pointer;
    text-decoration: ${props => props.complete? 'line-through #e056fd' : 'none' };
    font-style: ${props => props.complete? 'italic': 'normal'};
`


const Task = ({ task, tasks, setTasks }) => {
    const { id, task:taskName, complete } = task;

    const handleChangeComplete = id => {
        setTasks(
            tasks.map(task => (
                task.id === id ? {...task, complete: !task.complete} : task
            ))
        )
    }

    const handleRemoveTask = id => {
        const tasksFiltered = tasks.filter(task => task.id !== id);
        setTasks(tasksFiltered);
    }

    return (
        <>
            <TaskContainer>
                <P 
                    complete={complete}
                    onClick={ () => handleChangeComplete(id) }
                >{taskName}</P>
               <span 
                    style={{cursor: 'pointer'}} 
                    onClick={ () => handleRemoveTask(id) }
                >&times;</span>    
            </TaskContainer>
           
        </>
    )
}

export default Task
