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
        <div className="profile-box">
            <img className="profile-box__photo" src={profile.profilePhotoUrl} alt={profile.name} />
            <div className="profile-box__info">
                <span className="profile-box__info__name">{profile.name}</span>
                <span className="profile-box__info__title">{profile.title}</span>
            </div>
            <div className="profile-box__contacts">
                {profile.contacts.map((contact, index) => (
                    <Contact key={index} iconPath={contact.iconPath} platform={contact.platform} address={contact.address} />
                ))}
            </div>
            <div className="profile-box__socials">
                {profile.socials.map((social, index) => (
                    <ClickableIcon key={index} iconPath={social.iconPath} iconName={social.iconName} linkUrl={social.linkUrl} />
                ))}
            </div>
        </div>
    );
};

export default ProfileBox;