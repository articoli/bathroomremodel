import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Eco Bathroom Remodel collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="January 1, 2026">
      <p>
        Eco Bathroom Remodel (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects
        your privacy and is committed to protecting the personal information you share with us.
        This Privacy Policy explains what we collect, how we use it, and the choices you have.
      </p>

      <h2>Information We Collect</h2>
      <p>We collect information you voluntarily provide when you contact us, including:</p>
      <ul>
        <li>Your name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>Details about your home and remodeling project</li>
        <li>Your address or general location (so we can confirm service availability)</li>
      </ul>
      <p>
        We also collect limited technical data automatically, such as your IP address, browser
        type, and pages visited, to improve our website&apos;s performance and security.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and provide free quotes</li>
        <li>To schedule consultations and communicate about your project</li>
        <li>To improve our website, services, and customer experience</li>
        <li>To comply with legal and regulatory obligations</li>
      </ul>
      <p>We do not sell, rent, or trade your personal information to third parties.</p>

      <h2>Cookies and Analytics</h2>
      <p>
        Our website may use cookies and similar technologies to remember preferences and analyze
        traffic. You can disable cookies in your browser settings at any time. We use analytics
        tools that collect aggregate data only; they cannot identify you personally.
      </p>

      <h2>Sharing of Information</h2>
      <p>
        We only share your information with trusted service providers who help us operate our
        business (such as email delivery services), under confidentiality obligations, or when
        required by law. We never share your information for marketing purposes without your
        consent.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect your information
        against unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may request access to, correction of, or deletion of your personal information at any
        time. To make a request, contact us using the details below. You may also opt out of any
        marketing communications at any time.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our website is not directed to children under 13, and we do not knowingly collect
        personal information from children.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post any changes on this
        page and update the &ldquo;last updated&rdquo; date above.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at:
      </p>
      <p>
        <strong>Eco Bathroom Remodel</strong>
        <br />
        {site.address.full}
        <br />
        Phone: <a href={site.phoneHref}>{site.phone}</a>
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalLayout>
  );
}
