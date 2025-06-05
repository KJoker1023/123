import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { renderMarkdown } from '../utils/markdownRenderer';

const TermsPage: React.FC = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Markdown content for the terms of service
    const termsMarkdown = `
# Terms of Service

**Last Updated: August 1, 2025**

## Introduction

Welcome to Constant Cash. These Terms of Service ("Terms") govern your access to and use of the Constant Cash mobile application and website (collectively, the "Service"). Please read these Terms carefully before using our Service.

By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.

## Eligibility

To use our Service, you must be:

* At least 18 years old
* A Nigerian citizen or legal resident
* Possess a valid government-issued ID
* Have a Nigerian bank account in your name
* Have a regular source of income

## Account Registration

When you register for an account, you must provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.

## Loan Services

### Application Process

* You must complete our application process to be considered for a loan
* We may request additional information or documentation to evaluate your application
* We reserve the right to approve or deny loan applications at our sole discretion

### Loan Terms

* Loan amounts range from ₦5,000 to ₦500,000, depending on eligibility
* Loan durations range from 7 days to 12 months
* Interest rates and fees are disclosed before loan acceptance
* All repayment terms are stated in your loan agreement

### Repayment

* You agree to repay your loan according to the schedule in your loan agreement
* We offer multiple payment methods, including bank transfers, debit cards, and USSD
* Late payments may result in additional fees and negative reporting to credit bureaus

## Prohibited Activities

You agree not to:

* Provide false or misleading information
* Use the Service for any illegal purpose
* Attempt to gain unauthorized access to the Service
* Interfere with or disrupt the Service
* Create multiple accounts for fraudulent purposes

## Intellectual Property

The Service and its original content, features, and functionality are owned by Constant Cash and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

## Limitation of Liability

To the maximum extent permitted by law, Constant Cash shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the Service.

## Termination

We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.

## Changes to Terms

We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes through the Service or by other means.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.

## Contact Us

If you have any questions about these Terms, please contact us at:

**Email:** legal@constantcash.com
**Phone:** +234 701 234 5678
**Address:** 15 Financial Street, Victoria Island, Lagos, Nigeria
`;

    // Render the markdown content
    const renderedContent = renderMarkdown(termsMarkdown);
    setContent(renderedContent);
  }, []);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The rules and guidelines for using Constant Cash
          </p>
        </div>
      </section>
      
      {/* Terms Content */}
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

export default TermsPage;