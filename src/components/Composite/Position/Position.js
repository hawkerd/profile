/* src/components/Composite/Position/Position.js */
import React from 'react';
import './Position.css';

/* Import Components */
import DateRange from '../../Basic/DateRange/DateRange'
import Location from '../../Basic/Location/Location'

const Position = ({ logoUrl, name, position, dateRange, location, details }) => {
    return (
        <div className="position">
            <div className="position__header">
                <img className="position__header__logo" src={logoUrl} alt={name}/>
                <div className="position__header__title">
                    <span className="position__header__title__name">{name}</span>
                    <span className="position__header__title__position">{position}</span>
                </div>
                <div className="position__header__meta">
                    <DateRange dateRange={dateRange}/>
                    <Location location={location}/>
                </div>
            </div>
            <div className="position__details">
                <ul>
                    {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Position;