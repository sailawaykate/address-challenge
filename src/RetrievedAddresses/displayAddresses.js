import React from 'react';
import '../App.css';

//TODO: when address is hovered over, apply clicky mouse change
//TODO: handle address clicked
//TODO: Add container box
//TODO: Add Addresses list
//TODO: Add scrolling function for a bajillion addresses
const DisplayAddresses = ({ addresses = []}) => {

    return (
        <div className="container-box">
            <p className="container-header">Address Information</p>
            {addresses.map((address, i) => (
                <div key={i} className="address-box">
                    {address}
                </div>
            ))}
        </div>
    );
};

export default DisplayAddresses;
