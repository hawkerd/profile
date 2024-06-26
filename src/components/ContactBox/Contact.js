import React from 'react';
import './Contact.css';

const Contact = ({ logo, link, text }) => {
    return (
        <a href={link} target='_blank' rel='noopener noreferrer' className="contact">
            <img className="contact-logo" src={logo} />
            <p className="contact-text">{text}</p>
        </a>
    );
};

export default Contact;
