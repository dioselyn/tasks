import React from 'react';
import './css/TasksCounter.css';

function TasksCounter({ total, completed }) {
    return (
        <p className='TodoCounter color-primary'>You have completed {completed} of {total} Tasks</p>
    );
}

export { TasksCounter };