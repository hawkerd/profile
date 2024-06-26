import React from 'react';
import TechnologyList from '../TechnologyList/TechnologyList';
import './Project.css';

const Project = ({title, url, summary, details, technologies, media}) => {
    return (
        <div className="project">
            <h2 className="project-title">
                <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
            </h2>
            {media && <img className="project-media" src={media} alt={`${title} screenshot`} />}
            <p className="project-summary">{summary}</p>
            <ul className="project-details-list">
                {details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
            <TechnologyList technologies={technologies} />
        </div>
    );
};

export default Project;
