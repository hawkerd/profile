import React from 'react';
import './Technology.css';

const Technology = ({logo, name}) => {
    return (
        <div className="technology">
            <img className="technology-logo" src={logo} />
            <h3 className="technology-name">{name}</h3>
        </div>
    );
};

export default Technology;