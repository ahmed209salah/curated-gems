import { Link } from "react-router-dom"
import { LegalPage } from "@/components/legal/LegalPage"

const CookiePolicy = () => (
  <LegalPage
    title="Cookie Policy"
    description="Curated Gems uses only essential storage for sign-in and saved bookmarks. No advertising or analytics cookies."
    path="/cookies"
    updated="16 September 2026"
  >
    <p>
      This page explains the cookies and similar browser storage Curated Gems uses. The short version:
      we only use what the site needs to work, and we do not use advertising or analytics tracking.
    </p>

    <h2>What we use</h2>
    <ul>
      <li>
        <strong>Sign-in storage (essential):</strong> if you create an account, your browser keeps a
        session token so you stay signed in. It is removed when you sign out.
      </li>
      <li>
        <strong>Preferences (essential):</strong> small entries in your browser's local storage remember
        things like your saved bookmarks and whether you have dismissed our cookie notice. This stays
        on your device.
      </li>
    </ul>

    <h2>What we do not use</h2>
    <ul>
      <li>No advertising, retargeting or ad-network pixels.</li>
      <li>No analytics or traffic-measurement trackers.</li>
      <li>No social media tracking widgets or embedded third-party players.</li>
      <li>No cross-site profiling and no selling of data.</li>
    </ul>

    <h2>Do you need to give consent?</h2>
    <p>
      Because everything above is strictly necessary to deliver features you ask for, cookie consent is
      not required and we do not show a consent wall. We display a short informational notice instead.
      If we ever add analytics or advertising, we will ask for your consent first and give you a real
      choice before anything is set.
    </p>

    <h2>Your control</h2>
    <p>
      You can clear or block cookies and local storage in your browser settings at any time. Blocking
      the sign-in cookie will simply mean you cannot stay signed in; browsing the site still works.
    </p>

    <h2>More information</h2>
    <p>
      See our <Link to="/privacy">Privacy Policy</Link> for how we handle personal data.
    </p>
  </LegalPage>
)

export default CookiePolicy
