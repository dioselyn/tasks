import React from 'react';
import './css/TasksCounter.css';
import { TasksContext } from '../../context/Tasks';

function TasksCounter() {
    const {
        completedTasks,
        totalTasks,
    } = React.useContext(TasksContext);

    return (
        <p className='TodoCounter color-primary'>You have completed {completedTasks} of {totalTasks} Tasks</p>
    );
}

export { TasksCounter };