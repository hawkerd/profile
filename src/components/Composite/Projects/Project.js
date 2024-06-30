/* src/components/composite/Projects/Project.js */
import React from 'react';
import './Project.css';

/* Import Components */
import TechnologyCard from '../../Basic/TechnologyCard/TechnologyCard';

const Project = ({title, url, summary, details, technologies, media}) => {
    return (
        <div className="project">
            <h2 className="project__title">
                <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </h2>
            {media && <img className="project__media" src={media} alt={`${title} screenshot`} />}
            <p className="project__summary">{summary}</p>
            <ul className="project__details">
                {details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
            <div className="project__technologies">
                {technologies.map((technology, index) => <TechnologyCard key={index} logo={technology.logo} name={technology.name} />)}
            </div>
        </div>
    );
};

export default Project;
