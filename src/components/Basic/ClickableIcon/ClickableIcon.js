/* src/components/Basic/ClickableIcon/ClickableIcon.js */
import React from 'react';
import './ClickableIcon.css';

const ClickableIcon = ({ iconPath, iconName, linkUrl }) => {
    return (
        <a className="link" href={linkUrl} target="_blank" rel="noopener noreferrer">
            <div className="icon">
                <img className="image" src={iconPath} alt={iconName} />
                <span className="icon-name">{iconName}</span>
            </div>
        </a>
    );
};

export default ClickableIcon;