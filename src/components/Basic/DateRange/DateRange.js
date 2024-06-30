/* src/components/Basic/DateRange/DateRange.js */
import React from 'react';
import './DateRange.css'

const DateRange = ({ dateRange }) => {
    return (
        <div className="date-range">
            <img className="date-range__icon" src='icons/calendar.png' alt='icon'/>
            <span className="date-range__text">{`${dateRange.start} - ${dateRange.end}`}</span>
        </div>
    );
};

export default DateRange;