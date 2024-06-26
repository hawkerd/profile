import React from 'react';
import Technology from './Technology';
import './TechnologyList.css';

const TechnologyList = ({ technologies }) => {
    return (
        <div className="technologylist">
            {technologies.map((technology, index) => (
                <Technology key={index} logo={technology.logo} name={technology.name} />
            ))}
        </div>
    );
};

export default TechnologyList;
