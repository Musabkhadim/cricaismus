import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | crisaismus",
  description: "Learn how cricaismus collects, uses, and protects your information. Your privacy matters to us.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p>Last updated: May 9, 2025</p>

          <h2>Introduction</h2>
          <p>
            Welcome to cricaismus. We are committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website. We encourage you to read this policy carefully to understand your rights and how we handle your information.
          </p>

          <h2>What Information We Collect</h2>
          <ul>
            <li><strong>Personal Identification:</strong> Name, email address, contact details if voluntarily submitted.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on site, and browsing behavior to enhance your experience.</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, and operating system.</li>
          </ul>

          <h2>How We Use Your Data</h2>
          <p>Your information helps us to:</p>
          <ul>
            <li>Deliver personalized news and content based on your interests.</li>
            <li>Improve website performance, layout, and content relevance.</li>
            <li>Respond to user inquiries or support requests effectively.</li>
            <li>Ensure website security and prevent fraudulent activities.</li>
            <li>Comply with legal obligations if required by law.</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies to understand user behavior and improve your browsing experience. These cookies may include anonymous identifiers.
          </p>
          <p>
            You can disable cookies in your browser settings, but some features of our site may not function correctly if you do so.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use trusted third-party services like Google AdSense, Analytics, or social media embeds. These platforms may collect data according to their own privacy policies. We recommend reviewing those third-party policies for more details.
          </p>

          <h2>Data Security</h2>
          <p>
            Your data is important to us. We take all reasonable precautions to protect it from unauthorized access, misuse, or loss through secure servers, encryption, and access control.
          </p>

          <h2>Your Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Access the personal data we have collected.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw consent for data processing at any time.</li>
            <li>Restrict or object to how we use your data.</li>
          </ul>

          <h2>Children’s Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly collect data from minors. If we discover such data has been collected, we will delete it immediately.
          </p>

          <h2>Policy Updates</h2>
          <p>
            We may update this policy periodically. Any changes will be posted here with the updated date. Continued use of the site means you agree to the revised terms.
          </p>

          <h2>Contact Information</h2>
          <p>If you have questions or concerns regarding this privacy policy, you can contact us at:</p>
          <ul>
            <li>Email: musabkhadim363@gmail.com</li>
            <li>Phone: +92 347 0458847</li>
            <li>Address: Office 3/15, 5th Floor, Silk Center, Rehmanabad, Murree Road, Rawalpindi, Pakistan</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
