/* src/components/Basic/ClickableIcon/ClickableIcon.js */
import React from 'react';
import './ClickableIcon.css';

const ClickableIcon = ({ iconPath, iconName, linkUrl }) => {
    return (
        <a className="clickable-icon__link" href={linkUrl} target="_blank" rel="noopener noreferrer">
            <div className="clickable-icon">
                <img className="clickable-icon__image" src={iconPath} alt={iconName} />
                <span className="clickable-icon__name">{iconName}</span>
            </div>
        </a>
    );
};

export default ClickableIcon;