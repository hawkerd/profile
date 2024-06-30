/* src/components/Basic/CompanyCard/CompanyCard.js */
import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ logoUrl, name, position }) => {
    return (
        <div className="company-card">
            <img className="company-card__icon" src={logoUrl} alt={name} />
            <div className="company-card__info">
                <span className="company-card__info__name">{name}</span>
                <span className="company-card__info__position">{position}</span>
            </div>
        </div>
    );
};

export default CompanyCard;