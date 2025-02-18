// src/pages/Contact/Contact.js

import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import contactUsData from '../../data/contactUsData';

const Contact = () => {
  return (
    <div>
      <ContactUs companyEmail={contactUsData.email} />
    </div>
  );
};

export default Contact;
