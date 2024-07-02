/* src/components/Composite/Resume/Resume.js */
import React from 'react';
import './Resume.css';

/* Import Components */
import PositionList from '../Position/PositionList';
import TechStack from '../TechStack/TechStack';

/* Import Data */
import resume from '../../../data/resume'

const Resume = () => {
    return (
        <div className="resume">
            <div className="resume__tech-stack">
                <h2>Tech Stack</h2>
                <TechStack techStack={resume.techStack} />
            </div>
            <div className='resume__work'>
                <h2>Experience</h2>
                <PositionList positions={resume.workPositions}/>
            </div>
            <div className='resume__education'>
                <h2>Education</h2>
                <PositionList positions={resume.educationPositions}/>
            </div>
        </div>
    );
};

export default Resume;