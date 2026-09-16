import { Link } from "react-router-dom"
import { LegalPage } from "@/components/legal/LegalPage"

const TermsPage = () => (
  <LegalPage
    title="Terms and Conditions"
    description="The rules for using Curated Gems, including acceptable use, accuracy of listings, third-party links and liability."
    path="/terms"
    updated="16 September 2026"
  >
    <p>
      By using Curated Gems you agree to these terms. If you do not agree, please do not use the site.
    </p>

    <h2>About this site</h2>
    <p>
      Curated Gems is an independent, free-to-use directory of software and online tools, run by an
      individual publisher based in Egypt. Contact:{" "}
      <a href="mailto:mgt6513@gmail.com">mgt6513@gmail.com</a>. We are not affiliated with, endorsed
      by, or acting on behalf of any tool listed here.
    </p>

    <h2>Information is editorial, not advice</h2>
    <p>
      Listings, summaries and category pages reflect our own editorial opinion at the time of writing.
      Tools change their features, limits and pricing frequently, so always check the tool's own
      website before relying on anything you read here. We make no promise that information is
      complete, current or error-free, and nothing here is professional, legal, security or financial
      advice.
    </p>

    <h2>Third-party links and trademarks</h2>
    <p>
      The site links to external websites we do not control. We are not responsible for their content,
      security, pricing or terms — your use of them is governed by their own agreements. Product names
      and logos belong to their respective owners and are used for identification and commentary only.
    </p>

    <h2>Accounts and acceptable use</h2>
    <ul>
      <li>Keep your password confidential; you are responsible for activity under your account.</li>
      <li>Do not submit unlawful, misleading, infringing or abusive content.</li>
      <li>Do not scrape, overload, break into or disrupt the site.</li>
      <li>We may remove content or suspend accounts that break these rules.</li>
    </ul>

    <h2>Content you submit</h2>
    <p>
      You keep ownership of anything you submit, but you give us permission to publish, display and
      edit it on this site. Only submit content you have the right to share.
    </p>

    <h2>Our content</h2>
    <p>
      The text, design and layout of Curated Gems belong to us. You may link to and quote short
      extracts with credit; do not republish substantial parts without permission.
    </p>

    <h2>No fees</h2>
    <p>
      The site is free to use and we do not sell anything or take payments from visitors. See our{" "}
      <Link to="/refunds">Refund Policy</Link> for details.
    </p>

    <h2>Liability</h2>
    <p>
      The site is provided "as is" and "as available" without warranties of any kind. To the fullest
      extent the law allows, we are not liable for any loss arising from your use of the site or of any
      tool you find through it, including lost data, lost profits or business interruption. Nothing in
      these terms limits rights that cannot legally be limited, including consumer rights you may have
      where you live.
    </p>

    <h2>Availability and changes</h2>
    <p>
      We may change, pause or discontinue any part of the site at any time. We may also update these
      terms; the date at the top shows the latest version.
    </p>

    <h2>Governing law</h2>
    <p>
      These terms are governed by the laws of the Arab Republic of Egypt, without limiting any
      mandatory consumer protections available to you in your own country.
    </p>
  </LegalPage>
)

export default TermsPage
