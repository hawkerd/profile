/* src/components/Composite/TechStack/TechStack.js */
import React from 'react';
import TechnologyCardList from '../../Composite/TechnologyCardList/TechnologyCardList';
import './TechStack.css';

const TechStack = ({ techStack }) => {
    return (
        <div className="tech-stack">
            {Object.keys(techStack).map((category, index) => (
                <div key={index} className="tech-stack__category">
                    <span className="tech-stack__category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    <TechnologyCardList technologies={techStack[category]} />
                </div>
            ))}
        </div>
    );
};

export default TechStack;
