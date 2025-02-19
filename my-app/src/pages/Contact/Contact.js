// src/pages/Contact/Contact.js

import React from 'react';
import SimpleContact from '../../components/SimpleContact/SimpleContact';
import contactUsData from '../../data/contactUsData';

const Contact = () => {
  return (
    <div>
      <SimpleContact companyEmail={contactUsData.email} />
    </div>
  );
};

export default Contact;
