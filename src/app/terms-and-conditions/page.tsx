import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms and conditions governing use of the Eco Bathroom Remodel website and services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" updated="January 1, 2026">
      <p>
        Welcome to the Eco Bathroom Remodel website. By accessing or using this website, you
        agree to be bound by these Terms and Conditions. If you do not agree with any part of
        these terms, please do not use the website.
      </p>

      <h2>Use of Website</h2>
      <p>
        This website is provided for informational purposes to help you learn about our bathroom
        remodeling services in Plano, Texas and surrounding areas. You agree to use the website
        lawfully and not to attempt to disrupt, damage, or interfere with its operation.
      </p>

      <h2>Quotes and Estimates</h2>
      <p>
        Contact form submissions and phone conversations are for general inquiry purposes and do
        not constitute a binding contract. A formal written quote, once accepted by you, will set
        out the full scope, pricing, and timeline for your project. All projects are subject to a
        written agreement signed by both parties.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including text, graphics, logos, images, and software, is the
        property of Eco Bathroom Remodel or its licensors and is protected by applicable
        intellectual property laws. You may not reproduce, distribute, or modify any content
        without our prior written consent.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        This website may contain links to third-party websites. We are not responsible for the
        content, policies, or practices of any third-party sites. Visiting those sites is at your
        own discretion.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Eco Bathroom Remodel shall not be liable for any
        indirect, incidental, special, or consequential damages arising out of or in connection
        with your use of this website or reliance on its content.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        This website and its content are provided &ldquo;as is&rdquo; without warranties of any
        kind, either express or implied, including but not limited to warranties of accuracy,
        completeness, or fitness for a particular purpose. Information is provided for general
        guidance and may not reflect current pricing or availability.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms and Conditions are governed by and construed in accordance with the laws of
        the State of Texas, without regard to its conflict of law provisions. Any disputes shall
        be resolved in the courts located in Collin County, Texas.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms and Conditions at any time. Continued use of the website after
        changes are posted constitutes acceptance of the revised terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these Terms and Conditions may be directed to us at {site.address.full},
        by phone at <a href={site.phoneHref}>{site.phone}</a>, or by email at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
