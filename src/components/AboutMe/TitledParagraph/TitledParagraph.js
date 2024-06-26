import React from 'react';
import './TitledParagraph.css';

function TitledParagraph({title, paragraph}) {
    return (
      <div className = "titled-paragraph">
        <h1 className="title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    );
  }

export default TitledParagraph;