/* src/components/Composite/ProfileBox/ProfileBox.js */
import React from 'react';
import './ProfileBox.css';

/* Import Components */
import Contact from '../../Basic/Contact/Contact';
import ClickableIcon from '../../Basic/ClickableIcon/ClickableIcon';
/* Import Data */
import profile from '../../../data/profile';

const ProfileBox = () => {
    return (
        <div className="profileBox">
            <img className="profileBox-photo" src={profile.profilePhotoUrl} alt={profile.name} />
            <div className="profileBox-info">
                <span className="profileBox-name">{profile.name}</span>
                <span className="profileBox-title">{profile.title}</span>
            </div>
            <div className="profileBox-contacts">
                {profile.contacts.map((contact, index) => (
                    <Contact key={index} iconPath={contact.iconPath} platform={contact.platform} address={contact.address} />
                ))}
            </div>
            <div className="profileBox-socials">
                {profile.socials.map((social, index) => (
                    <ClickableIcon key={index} iconPath={social.iconPath} iconName={social.iconName} linkUrl={social.linkUrl} />
                ))}
            </div>
        </div>
    );
};

export default ProfileBox;