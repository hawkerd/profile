/* src/components/Basic/TechnologyCard/TechnologyCard.js */
import React from 'react';
import './TechnologyCard.css';

const TechnologyCard = ({logo, name}) => {
    return (
        <div className="technology">
            <img className="logo" src={logo} alt={name}/>
            <h3 className="name">{name}</h3>
        </div>
    );
};

export default TechnologyCard;