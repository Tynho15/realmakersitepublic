import React from 'react';
import './style.css'

function FilledButton ({text}) {
    return (
        <div className='otherButton'>
            <button>{text}</button>
        </div>
    );
}

export default FilledButton;