import React from 'react';
import './AboutMe.css';
import TechnologyList from '../TechnologyList/TechnologyList';
import ContactBox from './ContactBox/ContactBox';
import TitledParagraph from './TitledParagraph/TitledParagraph';

function AboutMe({ title, paragraph, technologies, profilephoto, contacts, name }) {
  return (
    <div className="about-me">
      <div className="top-section">
        <div className="left-section">
          <div className="profile-photo-container">
            <img src={profilephoto} alt="Profile" className="profile-photo" />
          </div>
          <h2 className="name">{name}</h2>
          <TitledParagraph title={title} paragraph={paragraph} />
        </div>
        <div className="right-section">
          <ContactBox contacts={contacts} />
        </div>
      </div>
      <div className="bottom-section">
        <TechnologyList technologies={technologies} />
      </div>
    </div>
  );
}

export default AboutMe;
