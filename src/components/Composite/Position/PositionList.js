/* src/components/Composite/PositionList/PositionList.js */
import React from 'react';
import './PositionList.css';
import Position from '../Position/Position';

const PositionList = ({ positions }) => {
    return (
        <div className="position-list">
            {positions.map((position, index) => (
                <Position
                    index={index}
                    logoUrl={position.logoUrl}
                    name={position.name}
                    position={position.position}
                    dateRange={position.dateRange}
                    location={position.location}
                    details={position.details}
                />
            ))}
        </div>
    );
};

export default PositionList;
