
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const privacyText = `
Privacy Policy

Effective Date: ${new Date().toLocaleDateString()}

Welcome to Keepics ("we," "our," "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our comic generation services (the "Service"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.

1. Information We Collect

We may collect information about you in a variety of ways:

Personal Data:
• Name and contact information (email address, phone number)
• Payment information (processed securely through third-party providers)
• Account credentials (username, password)

Usage Data:
• Images you upload for comic generation
• Text descriptions and dialogue you provide
• Generated comic content
• Browser type, operating system, and device information
• IP address and location data
• Pages visited and time spent on our site
• Cookies and similar tracking technologies

2. How We Use Your Information

We use the information we collect to:

• Provide, operate, and maintain our comic generation service
• Process your transactions and send related information
• Generate AI-powered comic content based on your inputs
• Send administrative information and service updates
• Respond to your comments, questions, and customer service requests
• Improve our website and services
• Send marketing communications (with your consent)
• Comply with legal obligations

3. How We Share Your Information

We may share your information in the following situations:

With Service Providers:
• OpenAI (for AI content generation)
• Lulu (for printing and shipping services)
• Payment processors (Stripe, PayPal)
• Analytics providers
• Customer support platforms

For Legal Reasons:
• To comply with legal processes, court orders, or government requests
• To protect our rights, property, or safety
• To investigate potential violations of our terms

With Your Consent:
• We may display your generated comics in our public gallery (only with explicit opt-in consent)
• For other purposes with your explicit consent

4. Data Security

We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.

5. Data Retention

We retain your personal information for as long as necessary to:
• Provide our services to you
• Comply with legal obligations
• Resolve disputes and enforce agreements

You may request deletion of your personal data at any time, subject to certain legal limitations.

6. Your Privacy Rights

Depending on your location, you may have the following rights:

• Access: Request copies of your personal data
• Rectification: Request correction of inaccurate personal data
• Erasure: Request deletion of your personal data
• Portability: Request transfer of your data to another service
• Objection: Object to processing of your personal data
• Restriction: Request restriction of processing

To exercise these rights, please contact us using the information provided below.

7. Cookies and Tracking Technologies

We use cookies and similar technologies to:
• Remember your preferences and settings
• Analyze site usage and improve our services
• Provide personalized content and advertisements

You can control cookies through your browser settings, but disabling cookies may affect site functionality.

8. Third-Party Links and Services

Our service may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.

9. Children's Privacy

Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided personal information, please contact us immediately.

10. International Data Transfers

Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.

11. California Privacy Rights (CCPA)

California residents have additional rights under the California Consumer Privacy Act:
• Right to know what personal information is collected
• Right to delete personal information
• Right to opt-out of the sale of personal information
• Right to non-discrimination

We do not sell personal information to third parties.

12. European Privacy Rights (GDPR)

If you are in the European Economic Area, you have additional rights under the General Data Protection Regulation:
• Lawful basis for processing your data
• Right to withdraw consent at any time
• Right to lodge a complaint with supervisory authorities

13. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date."

14. Contact Information

If you have questions or concerns about this Privacy Policy, please contact us at:

📧 Email: privacy@keepics.com
📍 Address: [Your Business Address]
📞 Phone: [Your Phone Number]

Data Protection Officer: [DPO Contact Information]

15. Consent

By using our service, you consent to our Privacy Policy and agree to its terms.
`;

const PrivacyPolicyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:text-yellow-500 underline transition bg-transparent border-none cursor-pointer p-0 m-0">
          Privacy Policy
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="mb-4 text-2xl font-bold">Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="text-xs whitespace-pre-line leading-relaxed text-blue-900 font-medium pr-2">
          {privacyText}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
