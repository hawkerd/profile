/* src/components/Basic/TechnologyCard/TechnologyCard.js */
import React from 'react';
import './TechnologyCard.css';

const TechnologyCard = ({logo, name}) => {
    return (
        <div className="technology-card">
            <img className="technology-card__logo" src={logo} alt={name}/>
            <h3 className="technology-card__name">{name}</h3>
        </div>
    );
};

export default TechnologyCard;