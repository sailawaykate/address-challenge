import React from 'react';
import '../App.css';

const listCls = "listCls";

const DropDownList = ({ data = [], setOpen }) => (
    <div className="dropbox">
        <ul>
            {data.map((item, i) => (
                <li key={i} className={listCls} onClick={() => setOpen(false)}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default DropDownList;
