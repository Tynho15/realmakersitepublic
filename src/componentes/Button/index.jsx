import React from 'react';
import "./style.css"

function Button ({text, active, link, externo}) {
    return (
        <a href={link ? link : "#"} target={externo ? '_blank' : ''} className={'botao ' + ((active) ? 'is_active' : '')}>
            <p>{text}</p>
        </a>
    );
}

export default Button;