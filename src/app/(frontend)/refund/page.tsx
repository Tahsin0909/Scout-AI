import { CalendarDays } from "lucide-react";

const policyNavigation = [
    { id: "general-policy", label: "General Policy" },
    { id: "monthly-subscriptions", label: "Monthly Subscriptions" },
    { id: "annual-subscriptions", label: "Annual Subscriptions" },
    { id: "merchandise", label: "Merchandise" },
    { id: "system-abuse", label: "System Abuse and Exploitation" },
    { id: "payments", label: "Payments, Sanctions and Human-Generated Content" },
    { id: "chargebacks", label: "Chargebacks and Disputes" },
    { id: "exceptions", label: "Exceptions" },
    { id: "right-of-refusal", label: "Right of Refusal or Refund Replacement" },
    { id: "policy-changes", label: "Policy Changes" },
    { id: "contact", label: "Contact Information" },
];

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero */}
            <section className="relative isolate overflow-hidden bg-[#1b1b1b] text-white">
                {/* Decorative glow */}
                <div
                    aria-hidden="true"
                    className="
            pointer-events-none absolute inset-0 -z-20
            bg-[radial-gradient(ellipse_55%_80%_at_92%_-12%,rgba(218,182,44,0.48),transparent_62%),radial-gradient(ellipse_42%_70%_at_8%_-25%,rgba(115,101,47,0.35),transparent_72%)]
          "
                />

                {/* Dark overlay */}
                <div
                    aria-hidden="true"
                    className="
            pointer-events-none absolute inset-0 -z-10
            bg-[linear-gradient(90deg,rgba(0,0,0,0.12),rgba(0,0,0,0.35))]
          "
                />

                <div
                    className="
            container flex min-h-[250px] items-center
            px-5 py-16
            sm:min-h-[280px] sm:px-8
            lg:min-h-[300px] lg:px-12
          "
                >
                    <div className="max-w-[980px]">
                        <h1
                            className="
                text-4xl font-bold tracking-[-0.035em]
                sm:text-5xl lg:text-6xl
              "
                        >
                            Refund Policy
                        </h1>

                        <p
                            className="
                mt-5 max-w-[900px]
                text-base leading-[1.7] text-white/65
                sm:text-lg
              "
                        >
                            This Refund Policy outlines the circumstances under which Apex
                            Adventure Lab may issue refunds, credits, replacements, or
                            subscription cancellations. Please review these terms carefully
                            before purchasing a membership, service, digital product, or
                            merchandise.
                        </p>
                        <div
                            className="
                                mt-6 flex items-center gap-2
                                text-sm text-white/55
                                sm:text-base
                            "
                        >
                            <CalendarDays
                                aria-hidden="true"
                                className="size-5"
                                strokeWidth={1.7}
                            />

                            <span>
                                Last Updated: 19 JULY 2026
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy body */}
            <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <div
                    className="
            container grid gap-10
            lg:grid-cols-[230px_minmax(0,1fr)]
            lg:gap-14 xl:grid-cols-[250px_minmax(0,1fr)]
            xl:gap-20
          "
                >
                    {/* Navigation */}
                    <aside className="min-w-0">
                        <div className="lg:sticky lg:top-24">
                            <p
                                className="
                  mb-4 text-lg font-semibold uppercase
                  tracking-[0.14em] text-muted-foreground
                "
                            >
                                Legal Menu
                            </p>

                            <nav aria-label="Refund policy sections">
                                <ol
                                    className="
                    flex gap-2 overflow-x-auto pb-2
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                    lg:block lg:space-y-1 lg:overflow-visible
                  "
                                >
                                    {policyNavigation.map((item, index) => (
                                        <li key={item.id} className="shrink-0">
                                            <a
                                                href={`#${item.id}`}
                                                className="
                          flex min-w-max items-start gap-2
                          rounded-md border border-border
                          bg-card px-3 py-2.5
                          text-sm leading-snug
                          text-muted-foreground
                          transition-colors duration-200
                          hover:border-primary/50
                          hover:bg-muted
                          hover:text-foreground
                          lg:min-w-0 lg:border-0
                          lg:bg-transparent lg:px-0
                          lg:py-2
                        "
                                            >
                                                <span className="text-foreground/50">
                                                    {index + 1}.
                                                </span>

                                                <span>{item.label}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>
                    </aside>

                    {/* Policy content */}
                    <article
                        className="
              min-w-0 max-w-[900px]
              text-base leading-[1.75]
              text-muted-foreground
              sm:text-lg
            "
                    >
                        <PolicySection
                            id="general-policy"
                            number="1."
                            title="General Policy"
                        >
                            <p>
                                All purchases made through Scout AI are subject to
                                this Refund Policy. Refund eligibility depends on the type of
                                product or service purchased, the amount of work already
                                completed, and the timing of the request.
                            </p>

                            <p>
                                Because many of our services include personalized planning,
                                human review, digital processing, and third-party costs, some
                                purchases may become non-refundable once fulfillment has
                                started.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="monthly-subscriptions"
                            number="2."
                            title="Monthly Subscriptions"
                        >
                            <p>
                                Monthly subscriptions may be cancelled at any time. A
                                cancellation prevents future renewal charges but does not
                                automatically create a refund for the current billing period.
                            </p>

                            <PolicyList
                                items={[
                                    "Cancellation takes effect at the end of the active billing cycle.",
                                    "Unused benefits do not roll over after the subscription ends.",
                                    "Refunds are generally unavailable once services or membership benefits have been accessed.",
                                    "Duplicate or demonstrably incorrect charges may be reviewed individually.",
                                ]}
                            />
                        </PolicySection>

                        <PolicySection
                            id="annual-subscriptions"
                            number="3."
                            title="Annual Subscriptions"
                        >
                            <p>
                                Annual plans provide discounted access for a twelve-month
                                period. Refund requests must be submitted promptly after the
                                initial purchase.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                Eligible annual-plan requests
                            </h3>

                            <PolicyList
                                items={[
                                    "The request is submitted within 14 days of purchase.",
                                    "No trip package, dossier, consultation, or premium benefit has been used.",
                                    "No handcrafted or expert-reviewed service has entered production.",
                                ]}
                            />

                            <p>
                                Once personalized work begins, any approved refund may be
                                reduced to account for completed work, processing costs, and
                                non-recoverable third-party expenses.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="merchandise"
                            number="4."
                            title="Merchandise"
                        >
                            <p>
                                Physical merchandise may be returned when it is unused,
                                unworn, and received in its original condition and packaging.
                            </p>

                            <PolicyList
                                items={[
                                    "Return requests must be submitted within 30 days of delivery.",
                                    "Customers are responsible for return shipping unless the item arrived damaged or incorrect.",
                                    "Personalized, limited-edition, final-sale, and downloadable products are not returnable.",
                                    "Refunds are processed after the returned item has been inspected.",
                                ]}
                            />
                        </PolicySection>

                        <PolicySection
                            id="system-abuse"
                            number="5."
                            title="System Abuse and Exploitation"
                        >
                            <p>
                                Refunds may be denied where an account shows evidence of
                                fraudulent activity, repeated exploitation of promotional
                                offers, unauthorized account sharing, excessive automated
                                usage, or attempts to bypass plan limits.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="payments"
                            number="6."
                            title="Payments, Sanctions and Human-Generated Content"
                        >
                            <p>
                                Certain services involve non-refundable processing,
                                consultation, review, research, or content-production costs.
                                Work completed by a human expert is considered consumed once
                                delivered or substantially prepared.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="chargebacks"
                            number="7."
                            title="Chargebacks and Disputes"
                        >
                            <p>
                                Customers should contact our support team before initiating a
                                payment dispute. Opening a chargeback without first allowing us
                                to investigate may result in temporary account suspension while
                                the matter is reviewed.
                            </p>

                            <PolicyList
                                items={[
                                    "Provide the transaction date and purchase email.",
                                    "Include the relevant order, plan, or invoice number.",
                                    "Describe the disputed charge and requested resolution.",
                                ]}
                            />
                        </PolicySection>

                        <PolicySection
                            id="exceptions"
                            number="8."
                            title="Exceptions"
                        >
                            <p>
                                We may approve exceptions where required by law or where there
                                is clear evidence of duplicate billing, an undelivered service,
                                a technical failure caused by our platform, or another verified
                                issue outside the customer&apos;s control.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="right-of-refusal"
                            number="9."
                            title="Right of Refusal or Refund Replacement"
                        >
                            <p>
                                Where appropriate, Scout AI may offer a service
                                correction, replacement, account credit, revised dossier, or
                                other reasonable remedy instead of a cash refund.
                            </p>

                            <PolicyList
                                items={[
                                    "The original service can reasonably be corrected.",
                                    "The issue relates to an incomplete or incorrect deliverable.",
                                    "A replacement provides equal or greater value.",
                                    "The customer accepts the replacement resolution.",
                                ]}
                            />
                        </PolicySection>

                        <PolicySection
                            id="policy-changes"
                            number="10."
                            title="Policy Changes"
                        >
                            <p>
                                We may update this Refund Policy to reflect changes in our
                                services, payment systems, legal obligations, or business
                                practices. The updated version becomes effective when posted on
                                this page.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="contact"
                            number="11."
                            title="Contact Information"
                        >
                            <p>
                                For refund questions or billing assistance, contact our support
                                team and include your account email, order information, and a
                                clear explanation of your request.
                            </p>

                            <div
                                className="
                  mt-5 rounded-lg border border-border
                  bg-card p-5 text-base
                "
                            >
                                <p className="font-semibold text-foreground">
                                    Scout AI Support
                                </p>

                                <p className="mt-1">
                                    Email: support@apexadventurelab.com
                                </p>
                            </div>
                        </PolicySection>
                    </article>
                </div>
            </section>
        </main>
    );
}

type PolicySectionProps = {
    id: string;
    number: string;
    title: string;
    children: React.ReactNode;
};

function PolicySection({
    id,
    number,
    title,
    children,
}: PolicySectionProps) {
    return (
        <section
            id={id}
            className="
        scroll-mt-28 border-b border-border
        py-8 first:pt-0 last:border-b-0
      "
        >
            <h2
                className="
          mb-4 flex items-start gap-2
          text-xl font-semibold leading-tight
          tracking-[-0.02em] text-foreground
          sm:text-2xl
        "
            >
                <span>{number}</span>
                <span>{title}</span>
            </h2>

            <div className="space-y-4">{children}</div>
        </section>
    );
}

function PolicyList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3 pl-5">
            {items.map((item) => (
                <li
                    key={item}
                    className="
            relative before:absolute before:-left-4
            before:top-[0.65em] before:size-1.5
            before:rounded-full before:bg-foreground/45
          "
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}