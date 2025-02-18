import React from 'react';
import './ContentSection.css';

const ContentSection = ({ id, title, children }) => {
  return (
    <section id={id} className="content-section">
      <h2 className="content-section__title">{title}</h2>
      <div className="content-section__body">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
