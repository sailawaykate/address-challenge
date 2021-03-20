import React from 'react';

const cls = "button";

const Button = ({onClick}) => (
    <button className={cls} onClick={onClick}>
    Select User ID
    </button>
);

export default Button;
