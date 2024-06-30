/* src/components/Elements/HeaderBar/HeaderBar.js */
import React, { useState } from 'react';
import './HeaderBar.css';

const HeaderBar = ({ title, content, setContent }) => {
    const headerTitle = () => {
        switch (content) {
            case 'about':
                return 'About';
            case 'resume':
                return 'Resume';
            case 'projects':
                return 'Projects';
        }
    };

    return (
        <div className="header-bar">
            <h3 className="bar-title">{headerTitle()}</h3>
            <div className="buttons">
                <button 
                    className={content === 'about' ? 'active' : 'inactive'} 
                    onClick={() => setContent('about')}
                >
                    About
                </button>
                <button 
                    className={content === 'resume' ? 'active' : 'inactive'} 
                    onClick={() => setContent('resume')}
                >
                    Resume
                </button>
                <button 
                    className={content === 'projects' ? 'active' : 'inactive'} 
                    onClick={() => setContent('projects')}
                >
                    Projects
                </button>
            </div>
        </div>
    );
};

export default HeaderBar;