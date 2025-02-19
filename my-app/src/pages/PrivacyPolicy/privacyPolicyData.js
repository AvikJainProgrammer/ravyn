// src/pages/PrivacyPolicy/privacyPolicyData.js

const privacyPolicySections = [
    {
      id: 'introduction',
      label: 'Introduction',
      title: 'Privacy Policy Overview',
      content: (
        <div>
          <p>
            We value your privacy and are committed to protecting your personal information.
            This Privacy Policy outlines the types of information we collect, how we use it,
            and the measures we take to safeguard your data.
          </p>
        </div>
      ),
    },
    {
      id: 'information-collection',
      label: 'Information Collection',
      title: 'Information We Collect',
      content: (
        <div>
          <p>
            We may collect various types of information when you use our services, including:
          </p>
          <ul>
            <li>Personal identification information (such as your name, email address, and phone number)</li>
            <li>Usage data, including cookies and browsing behavior</li>
            <li>Information provided by third-party integrations</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'information-use',
      label: 'How We Use Your Information',
      title: 'Use of Your Information',
      content: (
        <div>
          <p>
            Your information is used to enhance our services, provide you with personalized experiences,
            and communicate important updates. We take your privacy seriously and do not share your
            personal information with third parties except as required by law.
          </p>
        </div>
      ),
    },
    {
      id: 'data-security',
      label: 'Data Security',
      title: 'Data Security',
      content: (
        <div>
          <p>
            We implement a variety of security measures to protect your personal information.
            While no method of transmission or storage is completely secure, we strive to
            use commercially acceptable means to safeguard your data.
          </p>
        </div>
      ),
    },
    {
      id: 'your-rights',
      label: 'Your Rights',
      title: 'Your Privacy Rights',
      content: (
        <div>
          <p>
            You have the right to access, correct, or delete your personal information.
            If you have any concerns or requests regarding your data, please contact us.
          </p>
        </div>
      ),
    },
    {
      id: 'contact-info',
      label: 'Contact',
      title: 'Contact Information',
      content: (
        <div>
          <p>
            For any questions or concerns about our Privacy Policy, please reach out to us at{' '}
            <a href="mailto:privacy@yourcompany.com">privacy@yourcompany.com</a>.
          </p>
        </div>
      ),
    },
  ];
  
  export default privacyPolicySections;
  