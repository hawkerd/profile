/* src/components/Basic/Location/Location.js */
import React from 'react';
import './Location.css';

const Location = ({ location }) => {
    return (
        <div className="location">
            <img className="location__icon" src='icons/location.png' alt='location'/>
            <span className="location__text">{`${location.city}, ${location.state}, ${location.country}`}</span>
        </div>
    );
};

export default Location;