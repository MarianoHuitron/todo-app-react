import React from 'react'
import Task from './Task'
import Error from './Error'

const Tasks = ({tasks, setTasks}) => {


    if(tasks.length < 1) {
        return (<Error text="Add a new task" />)
    }

    return (
        <div className="scroll" style={{maxHeight: '390px', overflow: 'auto'}}>

            {tasks.map(task => (
                <Task 
                    key={ task.id }
                    task={ task }
                    tasks={tasks}
                    setTasks={ setTasks }
                />
            ))}
        </div>
        
    )
}

export default Tasks
