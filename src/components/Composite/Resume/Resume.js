/* src/components/Composite/Resume/Resume.js */
import React from 'react';
import './Resume.css';

/* Import Components */
import TimelineItem from '../../Basic/TimelineItem/TimelineItem';

const Resume = () => {
    return (
        <div className="resume">
            <h1>Resume</h1>
            <TimelineItem />
        </div>
    );
};

export default Resume;