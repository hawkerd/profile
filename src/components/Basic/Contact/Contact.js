/* src/components/Basic/Contact/Contact.js */
import React from 'react';
import './Contact.css';

const Contact = ({ iconPath, platform, address }) => {
    return (
        <div className="contact">
            <img className="contact__icon" src={iconPath} alt={platform} />
            <div className="contact__info">
                <span className="contact__info__platform">{platform}</span>
                <span className="contact__info__address">{address}</span>
            </div>
        </div>
    );
};

export default Contact;