
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ComicFAQDialog from "./ComicFAQDialog";

// Reusable FAQ content
const faqText = `
1. How does the comic creation process work?
Answer:
It's simple! Upload a photo, add a short description or dialogue, and our AI will generate a unique comic based on your input. You'll be able to preview the result and either download it digitally or print it as a physical comic book.

2. What kind of images can I upload?
Answer:
You can upload JPG, PNG, or WebP images. Make sure your image is clear and appropriate for all audiences. The better the quality, the better your comic will look!

3. Can I choose the style of the comic?
Answer:
In the initial version, the comic style is automatically selected by the AI. In future updates, we plan to add style options (manga, cartoon, sketch, etc.).

4. How long does it take to generate a comic?
Answer:
On average, it takes about 30–60 seconds for the AI to generate your comic after you upload your image and enter your text.

5. Can I print my comic as a real book?
Answer:
Absolutely! Once your comic is ready, you'll have the option to print it using our integration with Lulu. You'll be able to choose your shipping location and see real-time pricing and delivery options.

6. How much does it cost?
Answer:
You can try out comic creation for free (limited previews). Full-resolution downloads and printed copies are priced based on page count and shipping location. Visit our Pricing page for full details.

7. Will I receive an invoice after payment?
Answer:
Yes. A detailed receipt and invoice will be emailed to you automatically after purchase.

8. Can I edit my comic after it's generated?
Answer:
Currently, editing is limited. You can regenerate your comic by uploading a new photo or adjusting the text. Full editing tools are coming soon.

9. Who owns the rights to the comic I create?
Answer:
You own the rights to the comic you create, including the uploaded image and text. However, we may request permission to showcase your creation on our site (optional and opt-in only).

10. Is the content safe for children?
Answer:
We aim to provide a safe and fun platform for all ages. However, AI content is generated based on user input, so we ask all users to follow our content guidelines and refrain from uploading offensive material.

11. Can I use the comic commercially?
Answer:
Yes, as long as you own the image and the content you upload. Please ensure any uploaded content does not infringe on third-party rights.

12. What languages do you support?
Answer:
The site is in English by default, but we support multiple languages depending on your location. You can also switch languages manually from the menu.

13. Can I get a refund if I'm not happy with my comic?
Answer:
Digital products are non-refundable. For printed books, please contact our support if your order arrives damaged or there's an issue with printing or delivery.

14. I'm a teacher/parent/organization. Can I use this for a group?
Answer:
Yes! We love working with schools and organizations. Please contact us for bulk licensing or classroom tools.

15. How can I contact support?
Answer:
You can reach us through the Contact Us page, where you can fill out a form or use the live chat (when available). We usually respond within 24 hours.
`;

const termsText = `
Effective Date: [Insert Date]

Welcome to [Your Website Name] ("we," "our," "us"). These Terms and Conditions ("Terms") govern your access to and use of our website, services, and all related features (collectively, the "Service"). By accessing or using our Service, you agree to these Terms. If you do not agree, do not use the Service.

1. Eligibility

You must be at least 13 years old or the legal age of digital consent in your jurisdiction to use this Service. By using the Service, you represent and warrant that you meet this requirement.

2. User Responsibilities

You agree to:

• Provide accurate and lawful content (images, text, etc.).
• Not use the platform for illegal, harmful, or offensive purposes.
• Not upload content that violates copyright, trademarks, or any third-party rights.
• Use the comics you generate only in accordance with applicable laws.
We reserve the right to suspend or terminate accounts found in violation of these rules.

3. AI-Generated Content

The comic output is created using artificial intelligence (OpenAI and image generation models). While we strive for creative, accurate, and appropriate content, AI output may occasionally be imperfect or unpredictable.

We do not guarantee that:

• The comic will meet your expectations in terms of tone, accuracy, or detail.
• The generated content will be suitable for all audiences.
• You are solely responsible for the use and distribution of the AI-generated content.

4. Ownership & Copyright

You retain ownership of any original content you upload (e.g. images, text).
You also own the rights to the final comic generated by the Service, including for personal and commercial use, unless the content includes third-party elements you do not own.
By using our service, you grant us a non-exclusive, revocable license to display your generated comic on our website as part of our public gallery or promotional materials — only with your consent.

5. Prohibited Content

You may not upload, submit, or use content that:

• Contains hate speech, harassment, or threats
• Depicts or promotes illegal activities, nudity, or explicit material
• Infringes on any copyright or intellectual property
• Violates the privacy of any individual

We reserve the right to remove or report such content.

6. Payments and Refunds

Digital comic downloads are non-refundable.
Printed comic orders via Lulu are subject to Lulu's printing and shipping policies.
If your printed order arrives damaged or incorrect, please contact us within 14 days of delivery with proof of the issue.
All payments are processed securely via third-party providers (e.g. Stripe, PayPal).
You will receive an invoice or receipt via email after every purchase.

7. Third-Party Services

We integrate services provided by:

• OpenAI – for AI-generated text and image content
• Lulu – for global printing and shipping
• Payment providers – for secure transactions

We are not responsible for the performance or policies of these external platforms. Their use is subject to their own terms and privacy policies.

8. Privacy

Your privacy is important to us. Please refer to our [Privacy Policy] for details on how we collect, store, and use your data in compliance with GDPR, CCPA, and other applicable laws.

9. Account Access

If you create an account:

• You are responsible for maintaining the confidentiality of your credentials.
• You agree not to share or transfer your login details to others.
• We may disable or terminate accounts that violate these Terms or appear to be used fraudulently.

10. Availability and Modifications

We may update, modify, or discontinue the Service at any time without notice. We are not liable for any loss related to downtime, changes, or interruptions to the platform.

11. Limitation of Liability

To the fullest extent permitted by law:

• We are not liable for any indirect, incidental, or consequential damages.
• Our total liability for any claim related to the Service shall not exceed the amount you paid to us in the last 12 months, if any.

12. Governing Law

These Terms are governed by and construed in accordance with the laws of [Insert Country or State]. Any legal disputes shall be subject to the exclusive jurisdiction of the courts located in [Insert City/Country].

13. Contact

If you have any questions or concerns about these Terms, you can contact us at:

📧 Email: [Your Support Email]
📍 Address: [Your Business Address]

14. Changes to Terms

We may update these Terms from time to time. When we do, we will revise the "Effective Date" at the top of the page. Continued use of the Service constitutes acceptance of the new Terms.
`;

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

const FooterBar = () => {
  return (
    <footer className="mt-20 w-full py-8 border-t-2 border-blue-200 bg-gradient-to-r from-blue-50 via-white to-yellow-100 shadow-t-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <span className="font-bangers text-xl text-blue-900 tracking-wide">keepics</span>
          <span className="text-xs text-gray-400">© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
        <ul className="flex flex-wrap gap-5 text-xs text-blue-900 font-semibold items-center">
          <li>
            <ComicFAQDialog />
          </li>
          <li>
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-yellow-500 underline transition bg-transparent border-none cursor-pointer p-0 m-0">
                  Terms and Conditions
                </button>
              </DialogTrigger>
              <DialogContent className="max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="mb-4 text-2xl font-bold">Terms and Conditions</DialogTitle>
                </DialogHeader>
                <div className="text-xs whitespace-pre-line leading-relaxed text-blue-900 font-medium pr-2">
                  {termsText}
                </div>
              </DialogContent>
            </Dialog>
          </li>
          <li>
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
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500 underline transition">
              Contact
            </a>
          </li>
          <li>
            <select className="bg-blue-50 border border-blue-300 rounded px-2 py-1 text-xs font-medium ml-2">
              <option>EN</option>
              <option>ES</option>
              <option>FR</option>
              <option>HE</option>
              <option>DE</option>
            </select>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterBar;
