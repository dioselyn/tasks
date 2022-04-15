import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        <p className='TodoCounter color-primary'>You have completed {completed} of {total} Tasks</p>
    );
}

export { TodoCounter };