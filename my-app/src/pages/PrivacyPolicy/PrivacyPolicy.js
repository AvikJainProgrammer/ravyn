import React from 'react';
import BlogPage from '../../components/BlogPage/BlogPage';
import privacyPolicySections from './privacyPolicyData';


const PrivacyPolicy = () => {
  return <BlogPage sections={privacyPolicySections} />;
};

export default PrivacyPolicy;
