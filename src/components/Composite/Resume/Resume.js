/* src/components/Composite/Resume/Resume.js */
import React from 'react';
import './Resume.css';

/* Import Components */
import PositionList from '../Position/PositionList';

/* Import Data */
import resume from '../../../data/resume'

const Resume = () => {
    return (
        <div className="resume">
            <div className='resume__education'>
                <h2>Education</h2>
                <PositionList positions={resume.educationPositions}/>
            </div>
            <div className='resume__work'>
                <h2>Work Experience</h2>
                <PositionList positions={resume.workPositions}/>
            </div>
        </div>
    );
};

export default Resume;