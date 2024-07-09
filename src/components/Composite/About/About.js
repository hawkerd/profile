/* src/components/Composite/About.About.js */
import React from 'react';
import './About.css'

/* Import Components */
import CompanyCard from '../../Basic/CompanyCard/CompanyCard';
/* Import Data */
import about from '../../../data/about';

const About = () => {
    return (
        <div className="about">
            {about.paragraph.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
            <div className="about__cards">
                {about.cards.map((card, index) => (
                    <CompanyCard
                        key={index}
                        logoUrl={card.logoUrl}
                        name={card.name}
                        position={card.position}
                    />
                ))}
            </div>
        </div>
    );
};

export default About;