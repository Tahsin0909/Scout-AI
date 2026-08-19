import { CalendarDays } from "lucide-react";

const policyNavigation = [
    {
        id: "information",
        label: "Information",
    },
    {
        id: "cookies-policy",
        label: "Cookies Policy",
    },
    {
        id: "data-processing-policy",
        label: "Data Processing Policy",
    },
    {
        id: "affiliate-links",
        label:
            "Affiliate Links & Sponsored Recommendations",
    },
    {
        id: "policy-changes",
        label: "Policy Changes",
    },
    {
        id: "contact-information",
        label: "Contact Information",
    },
];

export default function AgreementPolicyPage() {
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
                        container flex min-h-[350px]
                        items-center px-5 py-16
                        sm:min-h-[400px] sm:px-8
                        lg:min-h-[460px] lg:px-12
                    "
                >
                    <div className="max-w-[1120px]">
                        <h1
                            className="
                                text-4xl font-bold
                                tracking-[-0.035em]
                                sm:text-5xl lg:text-6xl
                            "
                        >
                            Agreement Policy
                        </h1>

                        <p
                            className="
                                mt-6 max-w-[1080px]
                                text-base leading-[1.7]
                                text-white/65
                                sm:text-lg lg:text-xl
                            "
                        >
                            This Privacy Policy
                            (&ldquo;Policy&rdquo;) explains
                            how your data is handled when
                            you use the Scout Ai LLC
                            (&ldquo;Scout Ai,&rdquo;
                            &ldquo;TT,&rdquo; &ldquo;we,&rdquo;
                            &ldquo;our,&rdquo; or
                            &ldquo;us&rdquo;) website,
                            intelligent intake forms,
                            AI-powered trip planning tools,
                            and related services
                            (&ldquo;Services&rdquo;). We are
                            committed to protecting your
                            privacy and ensuring transparency
                            in how we collect, use, store, and
                            process your information. By
                            accessing or using the Services,
                            you agree to the terms outlined in
                            this Policy. If you do not agree,
                            do not use the Services.
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
                        lg:gap-14
                        xl:grid-cols-[250px_minmax(0,1fr)]
                        xl:gap-20
                    "
                >
                    {/* Navigation */}
                    <aside className="min-w-0">
                        <div className="lg:sticky lg:top-24">
                            <p
                                className="
                                    mb-4 text-sm font-semibold
                                    uppercase tracking-[0.14em]
                                    text-muted-foreground
                                "
                            >
                                Legal Overview
                            </p>

                            <nav aria-label="Agreement policy sections">
                                <ol
                                    className="
                                        flex gap-2 overflow-x-auto
                                        pb-2
                                        [scrollbar-width:none]
                                        [&::-webkit-scrollbar]:hidden
                                        lg:block lg:space-y-1
                                        lg:overflow-visible
                                    "
                                >
                                    {policyNavigation.map(
                                        (item, index) => (
                                            <li
                                                key={item.id}
                                                className="shrink-0"
                                            >
                                                <a
                                                    href={`#${item.id}`}
                                                    className="
                                                        group flex
                                                        min-w-max
                                                        items-start gap-2
                                                        rounded-md border
                                                        border-border
                                                        bg-card px-3
                                                        py-2.5 text-sm
                                                        leading-snug
                                                        text-muted-foreground
                                                        transition-colors
                                                        duration-200
                                                        hover:border-primary/50
                                                        hover:bg-muted
                                                        hover:text-foreground
                                                        lg:min-w-0
                                                        lg:border-0
                                                        lg:bg-transparent
                                                        lg:px-0 lg:py-2
                                                    "
                                                >
                                                    <span
                                                        className="
                                                            border-l-2
                                                            border-transparent
                                                            pl-2
                                                            text-foreground/50
                                                            transition-colors
                                                            group-hover:border-primary
                                                        "
                                                    >
                                                        {index +
                                                            1}
                                                        .
                                                    </span>

                                                    <span>
                                                        {
                                                            item.label
                                                        }
                                                    </span>
                                                </a>
                                            </li>
                                        ),
                                    )}
                                </ol>
                            </nav>
                        </div>
                    </aside>

                    {/* Policy content */}
                    <article
                        className="
                            min-w-0 max-w-[950px]
                            text-sm leading-[1.75]
                            text-muted-foreground
                            sm:text-base
                        "
                    >
                        <PolicySection
                            id="information"
                            number="1."
                            title="Information"
                        >
                            <PolicySubsection title="1.1 Information We Collect">
                                <PolicyGroup title="Information You Provide">
                                    <PolicyList
                                        items={[
                                            "Account information, including your name, email address, and password.",
                                            "Trip intake data, including dates, locations, preferences, goals, group details, medical considerations, and risk tolerance.",
                                            "Payment information processed by third-party processors. Scout Ai does not store complete card numbers.",
                                            "Communications, including emails, support messages, and feedback.",
                                            "Uploaded content, including photos, notes, and files.",
                                        ]}
                                    />
                                </PolicyGroup>

                                <PolicyGroup title="Information Collected Automatically">
                                    <PolicyList
                                        items={[
                                            "Device information, including IP address, browser type, and operating system.",
                                            "Usage data, including pages visited, features used, clicks, and time spent.",
                                            "Approximate location derived from your IP address.",
                                            "Cookies and similar tracking technologies.",
                                        ]}
                                    />
                                </PolicyGroup>

                                <PolicyGroup title="Information From Third Parties">
                                    <PolicyList
                                        items={[
                                            "Analytics providers.",
                                            "Payment processors.",
                                            "API partners providing maps, weather, trail data, and campground information.",
                                        ]}
                                    />
                                </PolicyGroup>

                                <p>
                                    We do not knowingly collect
                                    sensitive personal
                                    information unless it is
                                    voluntarily provided by you.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="1.2 How We Use Your Information">
                                <PolicyList
                                    items={[
                                        "Generate personalized trip packages and recommendations.",
                                        "Improve AI accuracy and performance.",
                                        "Process payments and manage subscriptions.",
                                        "Communicate service updates and support responses.",
                                        "Enhance safety recommendations.",
                                        "Analyze usage trends.",
                                        "Prevent fraud and maintain platform security.",
                                        "Comply with legal obligations.",
                                    ]}
                                />

                                <p>
                                    We use your information to
                                    personalize your experience
                                    and improve recommendation
                                    relevance. We do not sell
                                    your personal information.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="1.3 How We Share Your Information">
                                <PolicyGroup title="Service Providers">
                                    <PolicyList
                                        items={[
                                            "For hosting, analytics, email delivery, customer support, and payment processing.",
                                        ]}
                                    />
                                </PolicyGroup>

                                <PolicyGroup title="API & Data Partners">
                                    <PolicyList
                                        items={[
                                            "For maps, routing, weather, trail data, and campground information.",
                                        ]}
                                    />
                                </PolicyGroup>

                                <PolicyGroup title="Legal Requirements">
                                    <PolicyList
                                        items={[
                                            "To comply with laws or legal processes, or to protect rights and safety.",
                                        ]}
                                    />
                                </PolicyGroup>

                                <PolicyGroup title="Business Transfers">
                                    <PolicyList
                                        items={[
                                            "In the event of a merger, acquisition, or asset sale.",
                                        ]}
                                    />
                                </PolicyGroup>

                                <p>
                                    We do not share your
                                    personal information with
                                    third parties for their own
                                    marketing purposes.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="1.4 Data Retention">
                                <p>
                                    We retain your information
                                    only for as long as
                                    necessary to:
                                </p>

                                <PolicyList
                                    items={[
                                        "Provide the Services.",
                                        "Comply with legal obligations.",
                                        "Resolve disputes.",
                                        "Enforce agreements.",
                                    ]}
                                />

                                <p>
                                    You may request deletion at
                                    any time. If you request
                                    deletion, certain
                                    information may be retained
                                    as required by law or for
                                    legitimate business
                                    purposes, including fraud
                                    prevention and accounting.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="1.5 Data Security">
                                <p>
                                    We use industry-standard
                                    security measures,
                                    including:
                                </p>

                                <PolicyList
                                    items={[
                                        "HTTPS encryption.",
                                        "Secure authentication.",
                                        "Access controls.",
                                        "Regular security reviews.",
                                    ]}
                                />

                                <p>
                                    No method of transmission
                                    or storage is completely
                                    secure.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="1.6 Your Rights">
                                <p>
                                    Depending on your location,
                                    you may have the right to:
                                </p>

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
                                    We reserve the right to
                                    request verification of
                                    your identity before
                                    processing certain
                                    requests. Contact us to
                                    exercise these rights.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="1.7 Children’s Privacy">
                                <p>
                                    Scout Ai does not knowingly
                                    collect personal
                                    information from children
                                    under 13. If such
                                    information is discovered,
                                    it will be deleted promptly.
                                    If you believe a child under
                                    13 has provided us with
                                    personal information,
                                    please contact us
                                    immediately.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="1.8 International Data Transfers">
                                <p>
                                    If you access the Services
                                    from outside the United
                                    States, your information may
                                    be transferred to and
                                    processed in the United
                                    States.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="1.9 Third Party Links">
                                <p>
                                    We are not responsible for
                                    the privacy practices or
                                    content of third-party
                                    websites.
                                </p>
                            </PolicySubsection>
                        </PolicySection>

                        <PolicySection
                            id="cookies-policy"
                            number="2."
                            title="Cookies Policy"
                        >
                            <p>
                                Scout Ai uses cookies and
                                similar technologies to
                                improve your experience and
                                analyze usage.
                            </p>

                            <PolicySubsection title="2.1 Types of Cookies">
                                <PolicyList
                                    items={[
                                        "Essential Cookies: Required for core functionality.",
                                        "Analytics Cookies: Help us understand user behavior.",
                                        "Preference Cookies: Store user settings.",
                                        "Security Cookies: Protect against fraud and unauthorized access.",
                                    ]}
                                />
                            </PolicySubsection>

                            <PolicySubsection title="2.2 Why We Use Cookies">
                                <PolicyList
                                    items={[
                                        "Maintain session state.",
                                        "Remember preferences.",
                                        "Improve performance.",
                                        "Analyze usage patterns.",
                                    ]}
                                />
                            </PolicySubsection>

                            <PolicySubsection title="2.3 Managing Cookies">
                                <p>
                                    You may disable cookies in
                                    your browser settings. Some
                                    features may not function
                                    properly if cookies are
                                    disabled. You may also
                                    manage cookie preferences
                                    through applicable cookie
                                    banners.
                                </p>
                            </PolicySubsection>
                        </PolicySection>

                        <PolicySection
                            id="data-processing-policy"
                            number="3."
                            title="Data Processing Policy"
                        >
                            <p>
                                Scout Ai processes personal
                                data under the following legal
                                bases:
                            </p>

                            <PolicySubsection title="3.1 Contractual Necessity">
                                <p>
                                    To provide the Services,
                                    including generating trip
                                    packages and processing
                                    payments.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="3.2 Legitimate Interests">
                                <p>
                                    To improve the platform,
                                    enhance safety features,
                                    and analyze usage.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="3.3 Consent">
                                <p>
                                    Consent may be requested for
                                    optional data such as:
                                </p>

                                <PolicyList
                                    items={[
                                        "Precise location.",
                                        "Medical considerations.",
                                        "Marketing communications.",
                                    ]}
                                />

                                <p>
                                    You may withdraw consent at
                                    any time. Where consent is
                                    the legal basis, withdrawal
                                    does not affect the
                                    lawfulness of processing
                                    completed before withdrawal.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="3.4 Legal Obligations">
                                <p>
                                    To comply with applicable
                                    laws and lawful requests.
                                </p>
                            </PolicySubsection>
                        </PolicySection>

                        <PolicySection
                            id="affiliate-links"
                            number="4."
                            title="Affiliate Links & Sponsored Recommendations"
                        >
                            <p>
                                Scout Ai participates in
                                affiliate marketing programs.
                                Certain links within our
                                Services may be affiliate
                                links, and we may earn a
                                commission if you click these
                                links or make a purchase
                                through them. Affiliate links
                                do not increase your cost.
                            </p>

                            <PolicySubsection title="4.1 How Affiliate Links Work">
                                <PolicyList
                                    items={[
                                        "Affiliate partners may place cookies on your device.",
                                        "These cookies are controlled by the affiliate partner.",
                                        "Scout Ai does not receive or store your payment information.",
                                        "We may receive anonymized or aggregated data, such as link clicks and purchase confirmations.",
                                    ]}
                                />
                            </PolicySubsection>

                            <PolicySubsection title="4.2 Why We Use Affiliate Links">
                                <p>
                                    Affiliate partnerships help
                                    support the operation and
                                    development of Scout Ai. We
                                    only recommend products or
                                    services we believe may be
                                    genuinely useful for
                                    outdoor travel and trip
                                    planning.
                                </p>
                            </PolicySubsection>

                            <PolicySubsection title="4.3 No Endorsement or Obligation">
                                <PolicyList
                                    items={[
                                        "You are not required to click affiliate links.",
                                        "Affiliate relationships do not influence trip package content or recommendations.",
                                    ]}
                                />
                            </PolicySubsection>

                            <PolicySubsection title="4.4 Affiliate Partner Policies">
                                <p>
                                    Affiliate partners may
                                    collect data and track your
                                    interactions according to
                                    their own privacy policies,
                                    which we do not control.
                                </p>
                            </PolicySubsection>
                        </PolicySection>

                        <PolicySection
                            id="policy-changes"
                            number="5."
                            title="Policy Changes"
                        >
                            <p>
                                We reserve the right to modify
                                or update this Policy at any
                                time. Continued use of the
                                Services after changes are
                                posted constitutes acceptance
                                of the updated Policy.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="contact-information"
                            number="6."
                            title="Contact Information"
                        >
                            <p>
                                If you have questions or
                                concerns about this Privacy
                                Policy or your data, please
                                contact us at:
                            </p>

                            <div
                                className="
                                    mt-5 rounded-lg
                                    border border-border
                                    bg-card p-5
                                    text-base
                                "
                            >
                                <p className="font-semibold text-foreground">
                                    Scout Ai Support
                                </p>

                                <p className="mt-1">
                                    Email:
                                    support@Scout Aiusa.com
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
                scroll-mt-28 border-b
                border-border py-8
                first:pt-0
                last:border-b-0
            "
        >
            <h2
                className="
                    mb-5 flex items-start
                    gap-2 text-xl
                    font-semibold leading-tight
                    tracking-[-0.02em]
                    text-foreground
                    sm:text-2xl
                "
            >
                <span>{number}</span>
                <span>{title}</span>
            </h2>

            <div className="space-y-5">
                {children}
            </div>
        </section>
    );
}

type PolicySubsectionProps = {
    title: string;
    children: React.ReactNode;
};

function PolicySubsection({
    title,
    children,
}: PolicySubsectionProps) {
    return (
        <section className="space-y-3">
            <h3 className="font-semibold text-foreground">
                {title}
            </h3>

            <div className="space-y-3">
                {children}
            </div>
        </section>
    );
}

type PolicyGroupProps = {
    title: string;
    children: React.ReactNode;
};

function PolicyGroup({
    title,
    children,
}: PolicyGroupProps) {
    return (
        <div>
            <h4 className="font-medium text-foreground/90">
                {title}
            </h4>

            <div className="mt-1">
                {children}
            </div>
        </div>
    );
}

function PolicyList({
    items,
}: {
    items: string[];
}) {
    return (
        <ul className="space-y-1.5 pl-5">
            {items.map(item => (
                <li
                    key={item}
                    className="
                        relative
                        before:absolute
                        before:-left-4
                        before:top-[0.65em]
                        before:size-1
                        before:rounded-full
                        before:bg-foreground/45
                    "
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}