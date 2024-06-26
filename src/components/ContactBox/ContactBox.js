import React from 'react';
import './ContactBox.css';

import Contact from './Contact';

const ContactBox = ({ contacts }) => {
    return (
        <div className="contactbox">
            <h2 className="contactbox-title">Contact Info</h2>
            {contacts.map((contact, index) => (
                <Contact 
                    key={index}
                    logo={contact.logo}
                    link={contact.link}
                    text={contact.text}
                />
            ))}
        </div>
    );
};

export default ContactBox;
