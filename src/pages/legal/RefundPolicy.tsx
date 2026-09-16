import { Link } from "react-router-dom"
import { LegalPage } from "@/components/legal/LegalPage"

const RefundPolicy = () => (
  <LegalPage
    title="Refund Policy"
    description="Curated Gems is free and takes no payments, so there is nothing to refund. Purchases made on third-party tool websites follow that tool's own refund terms."
    path="/refunds"
    updated="16 September 2026"
  >
    <p>
      Curated Gems is completely free to use. We do not sell products, subscriptions or services, and
      we never take payment details from visitors — so there are no charges from us and nothing for us
      to refund.
    </p>

    <h2>If you paid a tool listed here</h2>
    <p>
      When you follow a link from Curated Gems to another company's website, any purchase you make
      there is a contract between you and that company. Refunds, cancellations and billing disputes are
      handled entirely under their terms — please contact their support directly. We cannot issue
      refunds on their behalf.
    </p>

    <h2>If you see an unexpected charge from us</h2>
    <p>
      We never bill visitors. If you believe you were charged in the name of Curated Gems, email{" "}
      <a href="mailto:mgt6513@gmail.com">mgt6513@gmail.com</a> so we can look into it, and contact your
      bank or card provider.
    </p>

    <h2>If this ever changes</h2>
    <p>
      Should we introduce a paid feature in the future, we will publish full pricing, cancellation and
      refund terms here before taking any payment, including any statutory cancellation rights that
      apply where you live.
    </p>

    <p>
      See also our <Link to="/terms">Terms and Conditions</Link> and{" "}
      <Link to="/privacy">Privacy Policy</Link>.
    </p>
  </LegalPage>
)

export default RefundPolicy
