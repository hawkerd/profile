/* src/components/Elements/ProfileBox/ProfileBox.js */
import React from 'react';
import './ProfileBox.css';

import Contact from '../../GUI/Contact/Contact';
import ClickableIcon from '../../GUI/ClickableIcon/ClickableIcon';

const ProfileBox = ({profilePhotoUrl, name, title, contacts, socials}) => {
    return (
        <div className="profileBox">
            <img className="profileBox-photo" src={profilePhotoUrl} alt={name} />
            <div className="profileBox-info">
                <span className="profileBox-name">{name}</span>
                <span className="profileBox-title">{title}</span>
            </div>
            <div className="profileBox-contacts">
                {contacts.map((contact, index) => (
                    <Contact key={index} iconPath={contact.iconPath} platform={contact.platform} address={contact.address} />
                ))}
            </div>
            <div className="profileBox-socials">
                {socials.map((social, index) => (
                    <ClickableIcon key={index} iconPath={social.iconPath} iconName={social.iconName} linkUrl={social.linkUrl} />
                ))}
            </div>
        </div>
    );
};

export default ProfileBox;