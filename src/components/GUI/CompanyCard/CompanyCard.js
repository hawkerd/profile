/* src/components/GUI/CompanyCard/CompanyCard.js */
import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ logoUrl, name, position }) => {
    return (
        <div className="companyCard">
            <img className="icon" src={logoUrl} alt={name} />
            <div className="info">
                <span className="name">{name}</span>
                <span className="position">{position}</span>
            </div>
        </div>
    );
};

export default CompanyCard;