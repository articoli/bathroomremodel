import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Website disclaimer for Eco Bathroom Remodel of Plano, Texas.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" updated="January 1, 2026">
      <h2>General Information</h2>
      <p>
        The information provided on this website is for general informational purposes only. All
        information is provided in good faith; however, we make no representation or warranty of
        any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or
        completeness of any information on the site.
      </p>

      <h2>Professional Advice</h2>
      <p>
        Content on this website, including blog articles, pricing guides, and design ideas, is
        provided for educational purposes and does not constitute professional, legal, financial,
        or construction advice. Every home is unique, and you should obtain a professional
        in-person assessment before making remodeling decisions. No client relationship is formed
        by browsing or contacting us through this website.
      </p>

      <h2>Pricing and Estimates</h2>
      <p>
        Price ranges and figures mentioned on this website are estimates based on typical projects
        in the Plano, Texas area. Actual costs depend on the specific condition, size, and scope
        of your project. Only a formal written quote from Eco Bathroom Remodel is binding.
      </p>

      <h2>Images</h2>
      <p>
        Project images displayed on this website are for illustrative purposes and may represent
        past projects, stock photography, or concept imagery. Your project may vary.
      </p>

      <h2>External Links</h2>
      <p>
        This website may contain links to external websites that are not provided or maintained by
        us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any
        information on these external websites.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        In no event shall Eco Bathroom Remodel be liable for any loss or damage, including without
        limitation, indirect or consequential loss or damage, arising from the use of, or reliance
        on, information provided on this website.
      </p>

      <h2>Consent</h2>
      <p>
        By using this website, you hereby consent to this disclaimer and agree to its terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this disclaimer, please contact us at {site.address.full},
        by phone at <a href={site.phoneHref}>{site.phone}</a>, or by email at{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
