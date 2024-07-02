// src/components/Composite/TechnologyCardList/TechnologyCardList.js
import React from 'react';
import TechnologyCard from '../../Basic/TechnologyCard/TechnologyCard';
import './TechnologyCardList.css';

const TechnologyCardList = ({ technologies }) => {
    return (
        <div className="technology-card-list">
            {technologies.map((technology, index) => (
                <TechnologyCard key={index} logo={technology.logo} name={technology.name} />
            ))}
        </div>
    );
};

export default TechnologyCardList;