import { CalendarDays } from "lucide-react";

const policyNavigation = [
    { id: "information-we-collect", label: "Information We Collect" },
    { id: "cookies-policy", label: "Cookies Policy" },
    { id: "data-processing-policy", label: "Data Processing Policy" },
    {
        id: "affiliate-links",
        label: "Affiliate Links & Sponsored Recommendations",
    },
    { id: "policy-changes", label: "Policy Changes" },
    { id: "contact", label: "Contact Information" },
];

export default function PrivacyPolicyPage() {
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
                            Privacy Policy
                        </h1>

                        <p
                            className="
                mt-5 max-w-[900px]
                text-base leading-[1.7] text-white/65
                sm:text-lg
              "
                        >
                            This Privacy Policy explains how Scout Ai collects, uses, stores,
                            and protects your information when you use our website, services,
                            and trip-planning tools. By using Scout Ai, you agree to the
                            practices described in this policy.
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
                                Legal Overview
                            </p>

                            <nav aria-label="Privacy policy sections">
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
                            id="information-we-collect"
                            number="1."
                            title="Information We Collect"
                        >
                            <h3 className="font-semibold text-foreground">
                                Information You Provide
                            </h3>
                            <PolicyList
                                items={[
                                    "Account information, including your name, email address, and password.",
                                    "Trip intake data, including dates, locations, preferences, goals, group details, medical considerations, and risk tolerance.",
                                    "Payment information processed by third-party payment providers. Scout Ai does not store full card numbers.",
                                    "Communications, including emails, support messages, and feedback.",
                                    "Uploaded content, including photos, notes, and files.",
                                ]}
                            />

                            <h3 className="mt-5 font-semibold text-foreground">
                                Information Collected Automatically
                            </h3>
                            <PolicyList
                                items={[
                                    "Device information, including IP address, browser type, and operating system.",
                                    "Usage data, including pages visited, features used, clicks, and time spent.",
                                    "Approximate location derived from your IP address.",
                                    "Cookies and similar technologies.",
                                ]}
                            />

                            <h3 className="mt-5 font-semibold text-foreground">
                                Information From Third Parties
                            </h3>
                            <PolicyList
                                items={[
                                    "Analytics providers.",
                                    "Payment processors.",
                                    "API partners, including maps, weather, trail data, and campground data providers.",
                                ]}
                            />

                            <p>
                                We do not knowingly collect sensitive personal information
                                unless it is voluntarily provided by you.
                            </p>

                            <PolicyList
                                items={[
                                    "Generate personalized trip packages and recommendations.",
                                    "Improve AI accuracy and performance.",
                                    "Process payments and manage subscriptions.",
                                    "Communicate updates and support responses.",
                                    "Enhance safety recommendations.",
                                    "Analyze usage trends.",
                                    "Prevent fraud and maintain platform security.",
                                    "Comply with legal obligations.",
                                ]}
                            />

                            <p>
                                We use your information to personalize your experience and
                                improve recommendation relevance. We do not sell your personal
                                information.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                Service Providers
                            </h3>
                            <PolicyList
                                items={[
                                    "For hosting, analytics, email delivery, customer support, and payment processing.",
                                ]}
                            />

                            <h3 className="mt-5 font-semibold text-foreground">
                                API & Data Partners
                            </h3>
                            <PolicyList
                                items={[
                                    "For maps, routing, weather, trail data, and campground information.",
                                ]}
                            />

                            <h3 className="mt-5 font-semibold text-foreground">
                                Legal Requirements
                            </h3>
                            <PolicyList
                                items={[
                                    "To comply with laws, legal processes, or protect rights and safety.",
                                ]}
                            />

                            <h3 className="mt-5 font-semibold text-foreground">
                                Business Transfers
                            </h3>
                            <PolicyList
                                items={[
                                    "In the event of a merger, acquisition, or asset sale.",
                                ]}
                            />

                            <p>
                                We do not share your personal information with third parties for
                                their own marketing purposes.
                            </p>

                            <p>We retain your information only as long as necessary to:</p>
                            <PolicyList
                                items={[
                                    "Provide the Services.",
                                    "Comply with legal obligations.",
                                    "Resolve disputes.",
                                    "Enforce agreements.",
                                ]}
                            />

                            <p>
                                You may request deletion at any time. If you request deletion,
                                certain information may be retained as required by law or for
                                legitimate business purposes, including but not limited to fraud
                                prevention and accounting.
                            </p>

                            <p>We use industry-standard security measures, including:</p>
                            <PolicyList
                                items={[
                                    "HTTPS encryption.",
                                    "Secure authentication.",
                                    "Access controls.",
                                    "Regular security reviews.",
                                ]}
                            />

                            <p>No method of transmission or storage is completely secure.</p>

                            <p>Depending on your location, you may have the right to:</p>
                            <PolicyList
                                items={[
                                    "Access your personal data.",
                                    "Request correction or deletion.",
                                    "Restrict or object to processing.",
                                    "Opt out of marketing.",
                                    "Request data portability.",
                                ]}
                            />

                            <p>
                                We reserve the right to request verification of your identity
                                before processing certain requests. Contact us to exercise these
                                rights.
                            </p>

                            <p>
                                Scout Ai does not knowingly collect personal information from
                                children under 13. If such information is discovered, it will be
                                deleted promptly. If you believe a child under 13 has provided us
                                with personal information, please contact us immediately.
                            </p>

                            <p>
                                If you access the Services from outside the United States, your
                                information may be transferred to and processed in the U.S.
                            </p>

                            <p>
                                We are not responsible for the privacy practices or content of
                                third-party websites.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="cookies-policy"
                            number="2."
                            title="Cookies Policy"
                        >
                            <p>
                                Scout Ai uses cookies and similar technologies to improve your
                                experience and analyze usage.
                            </p>

                            <PolicyList
                                items={[
                                    "Essential Cookies: Required for core functionality.",
                                    "Analytics Cookies: Help us understand user behavior.",
                                    "Preference Cookies: Store user settings.",
                                    "Security Cookies: Protect against fraud and unauthorized access.",
                                ]}
                            />

                            <PolicyList
                                items={[
                                    "Maintain session state.",
                                    "Remember preferences.",
                                    "Improve performance.",
                                    "Analyze usage patterns.",
                                ]}
                            />

                            <p>
                                You may disable cookies in your browser settings. Some features
                                may not function properly if cookies are disabled. You may also
                                manage cookie preferences through cookie banners where
                                applicable.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="data-processing-policy"
                            number="3."
                            title="Data Processing Policy"
                        >
                            <p>
                                Scout Ai processes personal data under the following legal bases:
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                Contract
                            </h3>
                            <p>
                                To provide the Services, including generating trip packages and
                                processing payments.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                Legitimate Interest
                            </h3>
                            <p>
                                To improve the platform, enhance safety features, and analyze
                                usage.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                Consent
                            </h3>
                            <p>For optional data such as:</p>
                            <PolicyList
                                items={[
                                    "Precise location.",
                                    "Medical considerations.",
                                    "Marketing communications.",
                                ]}
                            />

                            <p>
                                You may withdraw consent at any time. Where consent is the legal
                                basis, withdrawal of consent does not affect the lawfulness of
                                processing prior to withdrawal.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                Legal Obligation
                            </h3>
                            <p>To comply with applicable laws and lawful requests.</p>
                        </PolicySection>

                        <PolicySection
                            id="affiliate-links"
                            number="4."
                            title="Affiliate Links & Sponsored Recommendations"
                        >
                            <p>
                                Scout Ai participates in affiliate marketing programs. Certain
                                links within our Services may be affiliate links, and we may earn
                                a commission if you click those links or make a purchase through
                                them. Affiliate links do not increase your cost.
                            </p>

                            <PolicyList
                                items={[
                                    "Affiliate partners may place cookies on your device.",
                                    "These cookies are controlled by the affiliate partner.",
                                    "Scout Ai does not receive or store your payment information.",
                                    "We may receive anonymized or aggregated data, such as link clicks and purchase confirmations.",
                                ]}
                            />

                            <p>
                                Affiliate partnerships help support the operation and development
                                of Scout Ai. We only recommend products or services we believe may
                                be genuinely useful for outdoor travel and trip planning.
                            </p>

                            <PolicyList
                                items={[
                                    "You are not required to click affiliate links.",
                                    "Affiliate relationships do not influence trip package content or recommendations.",
                                ]}
                            />

                            <p>
                                Affiliate partners may collect data and track your interactions
                                according to their own privacy policies, which we do not control.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="policy-changes"
                            number="5."
                            title="Policy Changes"
                        >
                            <p>
                                We reserve the right to modify or update this Policy at any time.
                                Continued use of the Services after changes are posted constitutes
                                acceptance of the updated Policy.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="contact"
                            number="6."
                            title="Contact Information"
                        >
                            <p>
                                If you have questions or concerns about this Privacy Policy or
                                your data, please contact us at:
                            </p>

                            <div
                                className="
                  mt-5 rounded-lg border border-border
                  bg-card p-5 text-base
                "
                            >
                                <p className="font-semibold text-foreground">
                                    Scout Ai Support
                                </p>

                                <p className="mt-1">support@Scout Aiusa.com</p>
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