/* src/components/Basic/Contact/Contact.js */
import React from 'react';
import './Contact.css';

const Contact = ({ iconPath, platform, address }) => {
    return (
        <div className="contact">
            <img className="contact-icon" src={iconPath} alt={platform} />
            <div className="contact-info">
                <span className="contact-platform">{platform}</span>
                <span className="contact-address">{address}</span>
            </div>
        </div>
    );
};

export default Contact;