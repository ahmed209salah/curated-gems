import { Link } from "react-router-dom"
import { LegalPage } from "@/components/legal/LegalPage"

const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    description="How Curated Gems handles your data: what we collect, why, how long we keep it, and how to ask for deletion."
    path="/privacy"
    updated="16 September 2026"
  >
    <p>
      Curated Gems is an independent website that lists free software and tools. This policy explains
      what personal data the site collects, why, and what you can do about it. We aim to collect as
      little as possible.
    </p>

    <h2>Who runs this site</h2>
    <p>
      Curated Gems is run by an independent individual publisher based in Egypt. For any privacy
      question or request, email <a href="mailto:mgt6513@gmail.com">mgt6513@gmail.com</a>.
    </p>

    <h2>What we collect</h2>
    <ul>
      <li>
        <strong>Account data (only if you create an account):</strong> your email address and an
        encrypted password. This is used solely to sign you in and to link any tool suggestions or
        votes to your account.
      </li>
      <li>
        <strong>Content you submit:</strong> tool suggestions or votes you choose to send us.
      </li>
      <li>
        <strong>Technical data:</strong> our hosting provider processes standard server logs (such as
        IP address, browser type and time of request) to deliver the site and protect it from abuse.
      </li>
    </ul>
    <p>
      We do <strong>not</strong> run advertising or analytics trackers, we do not build advertising
      profiles, we do not ask for your name, phone number, address or payment details, and we never
      sell or rent personal data.
    </p>

    <h2>Why we can use your data</h2>
    <ul>
      <li>To provide accounts, sign-in and the features you ask for (performance of our agreement with you).</li>
      <li>To keep the site secure and working (our legitimate interest).</li>
      <li>Where consent is needed, we ask for it and you can withdraw it at any time.</li>
    </ul>

    <h2>Who processes it</h2>
    <p>
      The site runs on Lovable Cloud (built on Supabase) for hosting, database and authentication.
      These providers process data on our behalf and may store it on servers outside your country.
      We do not share your data with anyone else except where legally required.
    </p>

    <h2>How long we keep it</h2>
    <p>
      Account data is kept until you ask us to delete your account. Submitted suggestions may be kept
      as part of the site content. Server logs are kept only for a short period by our host.
    </p>

    <h2>Your rights</h2>
    <p>
      You can ask us to show you the data we hold about you, correct it, delete it, or delete your
      account entirely. Email <a href="mailto:mgt6513@gmail.com">mgt6513@gmail.com</a> and we will
      respond within 30 days. Depending on where you live you may also have the right to complain to
      your local data protection authority.
    </p>

    <h2>Children</h2>
    <p>
      This site is not directed at children under 13, and we do not knowingly collect their data. If
      you believe a child has created an account, contact us and we will remove it.
    </p>

    <h2>Cookies and local storage</h2>
    <p>
      See our <Link to="/cookies">Cookie Policy</Link> for details on the small amount of storage the
      site uses.
    </p>

    <h2>Changes</h2>
    <p>
      If this policy changes we will update the date at the top of this page. Continued use of the
      site after a change means you accept the updated policy.
    </p>
  </LegalPage>
)

export default PrivacyPolicy
