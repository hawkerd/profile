/* src/components/Elements/About.About.js */
import React from 'react';
import CompanyCard from '../../GUI/CompanyCard/CompanyCard';
import './About.css'

const About = ({ paragraph, cards }) => {
    return (
        <div className="about">
            <p>{paragraph}</p>
            <div className="cards">
                {cards.map((card, index) => (
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