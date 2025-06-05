import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { renderMarkdown } from '../utils/markdownRenderer';

const PrivacyPolicyPage: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Markdown content for the privacy policy
    const privacyPolicyMarkdown = `
# Privacy Policy

**Last Updated: August 1, 2025**

## Introduction

Welcome to Constant Cash ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").

Please read this Privacy Policy carefully. By accessing or using our Service, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.

## Information We Collect

### Personal Information

We may collect the following personal information:

* Full name
* Contact information (email address, phone number, physical address)
* Date of birth
* National identification numbers (BVN, NIN)
* Employment information (employer name, salary, employment duration)
* Financial information (bank account details, transaction history)
* Device information (device ID, IP address, operating system)
* Location information

### How We Collect Information

We collect information:

* Directly from you when you register or use our app
* From third parties (credit bureaus, banking partners, identity verification services)
* Automatically through cookies and similar technologies when you use our app
* From your device (with your permission)

## How We Use Your Information

We use your personal information to:

* Provide and maintain our Service
* Process and evaluate loan applications
* Verify your identity and prevent fraud
* Communicate with you about your account
* Improve our products and services
* Comply with legal and regulatory requirements
* Conduct credit assessments and risk analysis
* Collect debts and enforce our terms

## Information Sharing and Disclosure

We may share your information with:

* Service providers who perform services on our behalf
* Financial institutions and payment processors
* Credit bureaus and financial regulatory authorities
* Law enforcement agencies when required by law
* Potential buyers in the event of a corporate sale or merger

We do not sell your personal information to third parties for marketing purposes.

## Data Security

We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.

## Your Rights

Depending on your location, you may have the right to:

* Access the personal information we hold about you
* Correct inaccurate personal information
* Delete your personal information in certain circumstances
* Object to our processing of your personal information
* Withdraw consent where we rely on consent to process your information

To exercise these rights, please contact us using the information provided in the "Contact Us" section.

## Data Retention

We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law or for legitimate business purposes.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.

## Contact Us

If you have any questions about this Privacy Policy, please contact us at:

**Email:** privacy@constantcash.com
**Phone:** +234 701 234 5678
**Address:** 15 Financial Street, Victoria Island, Lagos, Nigeria

## Governing Law

This Privacy Policy shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
`;

    // Render the markdown content
    const renderedContent = renderMarkdown(privacyPolicyMarkdown);
    setContent(renderedContent);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;