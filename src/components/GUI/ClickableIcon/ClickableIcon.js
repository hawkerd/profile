/* src/components/GUI/ClickableIcon/ClickableIcon.js */
import React from 'react';
import './ClickableIcon.css';

const ClickableIcon = ({ iconPath, iconName, linkUrl }) => {
    return (
        <a className="clickableIcon-link" href={linkUrl} target="_blank" rel="noopener noreferrer">
            <div className="clickableIcon">
                <img className="clickableIcon-image" src={iconPath} alt={iconName} />
                <span className="clickableIcon-name">{iconName}</span>
            </div>
        </a>
    );
};

export default ClickableIcon;