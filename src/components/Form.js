import React, { useState } from 'react'
import shortid from 'shortid';
import Button from './Button'
import Error from './Error';
import Input from './Input'

const Form = ({setTasks, tasks}) => {

    const [formValues, setFormValues] = useState({
        task: ''
    });
    const [error, setError] = useState(false);
    const { task } = formValues;

    const handleInputChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        if(task.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        
        const newTask = {
            id: shortid.generate(),
            complete: false,
            task
        }
        console.log(newTask)

        setTasks([
            ...tasks,
            newTask
        ]);

        setFormValues({
            task: ''
        });

    }

    return (
        <form onSubmit={ handleSubmit }>
            {error && <Error text="The task is required" />}
            <Input
                placeholder="Task"
                name="task"
                autoComplete="off"
                value={task}
                onChange={ handleInputChange }
            />
            <Button
                text="Add Task"
                type="submit"
            />
        </form>
    )
}

export default Form
