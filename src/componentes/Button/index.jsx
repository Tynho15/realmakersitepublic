import React from 'react';
import "./style.css"

function Button ({text, active}) {
    return (
        <button className={'botao ' + ((active) ? 'is_active' : '')}>
            <p>{text}</p>
        </button>
    );
}

export default Button;