import { CalendarDays } from "lucide-react";

/* eslint-disable react/no-unescaped-entities */
const policyNavigation = [
    { id: "eligibility", label: "Eligibility" },
    { id: "accounts-security", label: "Accounts & Security" },
    { id: "services-provided", label: "Services Provided" },
    { id: "ai-generated-content", label: "AI Generated Content" },
    { id: "user-responsibilities", label: "User Responsibilities" },
    { id: "prohibited-conduct", label: "Prohibited Conduct" },
    { id: "goods-subscriptions-billing", label: "Goods, Subscriptions & Billing" },
    { id: "affiliate-links", label: "Affiliate Links" },
    { id: "third-party-services", label: "Third Party Services & Data" },
    { id: "intellectual-property", label: "Intellectual Property" },
    { id: "user-content", label: "User Content" },
    { id: "disclaimers", label: "Disclaimers" },
    { id: "limitation-of-liability", label: "Limitation of Liability" },
    { id: "indemnification", label: "Indemnification" },
    { id: "termination", label: "Termination" },
    { id: "governing-law", label: "Governing Law" },
    { id: "changes-to-terms", label: "Changes to These Terms" },
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
                            Terms of Service
                        </h1>

                        <p
                            className="
                mt-5 max-w-[900px]
                text-base leading-[1.7] text-white/65
                sm:text-lg
              "
                        >
                            These Terms of Service govern your use of TripTrax Services. Please
                            review these terms carefully before accessing or using any features,
                            content, or services provided by TripTrax.
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

                            <nav aria-label="Terms of service sections">
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
                            id="eligibility"
                            number="1."
                            title="Eligibility"
                        >
                            <p>
                                You must be at least 18 years old to use the Services without
                                the consent of an adult. By using the Services, you represent
                                that you are either at least 18 years old or have the consent
                                of an adult to use the Services.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="accounts-security"
                            number="2."
                            title="Accounts & Security"
                        >
                            <h3 className="mt-5 font-semibold text-foreground">
                                2.1 Account Creation
                            </h3>
                            <p>
                                You must create an account to access certain features. You agree
                                to provide accurate, complete information and keep it updated.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                2.2 Account Security
                            </h3>
                            <p>
                                You are responsible for maintaining the confidentiality of your
                                login credentials and for all activity under your account.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                2.3 Unauthorized Use
                            </h3>
                            <p>
                                Notify us immediately if you suspect unauthorized access to your
                                account. You may also change your password at any time if you
                                suspect that your account has been compromised.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="services-provided"
                            number="3."
                            title="Services Provided"
                        >
                            <p className="font-semibold text-foreground">TripTrax provides:</p>
                            <PolicyList
                                items={[
                                    "AI-powered trip packages",
                                    "Route suggestions and planning tools",
                                    "Safety considerations and environmental insights",
                                    "Digital packages and membership tiers",
                                    "Physical merchandise (hats, shirts, stickers, etc.)",
                                    "Affiliate linked gear recommendations",
                                ]}
                            />

                            <p>
                                These Services are informational and not a substitute for
                                professional outdoor guidance, emergency planning, or real time
                                operational monitoring.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="ai-generated-content"
                            number="4."
                            title="AI Generated Content"
                        >
                            <h3 className="mt-5 font-semibold text-foreground">
                                4.1 Nature of AI Output
                            </h3>
                            <p>
                                Trip packages, recommendations, and route suggestions are
                                generated using AI models and third party data sources. They may
                                contain inaccuracies, outdated information, or incomplete data.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                4.2 User Responsibility
                            </h3>
                            <p>
                                While we do our best to ensure you receive accurate information,
                                you agree that:
                            </p>
                            <PolicyList
                                items={[
                                    "You will verify all critical information independently",
                                    "You will use proper navigation tools and safety equipment",
                                    "You will exercise judgment appropriate for outdoor activities",
                                ]}
                            />

                            <p>
                                TripTrax is not responsible for decisions made based on AI
                                generated content.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="user-responsibilities"
                            number="5."
                            title="User Responsibilities"
                        >
                            <p className="font-semibold text-foreground">
                                By using the Services, you agree to:
                            </p>
                            <PolicyList
                                items={[
                                    "Follow all local laws, regulations, and land use rules",
                                    "Respect trail closures, weather advisories, and safety warnings",
                                    "Use appropriate gear and safety precautions",
                                    "Avoid dangerous or illegal activities",
                                    "Not rely solely on AI generated content for navigation or safety",
                                ]}
                            />
                        </PolicySection>

                        <PolicySection
                            id="prohibited-conduct"
                            number="6."
                            title="Prohibited Conduct"
                        >
                            <p className="font-semibold text-foreground">You may not:</p>
                            <PolicyList
                                items={[
                                    "Use the Services for unlawful purposes",
                                    "Attempt to reverse engineer or disrupt the platform",
                                    "Upload harmful, offensive, or infringing content",
                                    "Misrepresent your identity",
                                    "Use automated tools to scrape or extract data",
                                    "Interfere with the operation of the Services",
                                ]}
                            />

                            <p>
                                Breach of these Terms may, at our discretion, subject your
                                account to immediate deletion and termination of access to the
                                Services.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="goods-subscriptions-billing"
                            number="7."
                            title="Goods, Subscriptions & Billing"
                        >
                            <h3 className="mt-5 font-semibold text-foreground">
                                7.1 Digital Goods
                            </h3>
                            <p>Digital products include:</p>
                            <PolicyList
                                items={[
                                    "Trip packages",
                                    "Membership tiers and associated content",
                                    "Digital packages",
                                    "AI generated content",
                                ]}
                            />

                            <p>
                                Digital goods are delivered electronically and are considered
                                consumed upon delivery. They cannot be returned, revoked, or
                                refunded once delivered.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                7.2 Physical Goods
                            </h3>
                            <p>Physical products include:</p>
                            <PolicyList
                                items={[
                                    "Apparel",
                                    "Stickers",
                                    "Patches",
                                    "Miscellaneous merchandise",
                                ]}
                            />

                            <p>
                                Physical goods are manufactured and delivered to the shipping
                                address you provide. Estimated shipping times and costs are
                                displayed at checkout. Delivery estimates are not guaranteed.
                                TripTrax is not responsible for delays caused by carriers,
                                customs, or external factors outside our control. While we make
                                reasonable efforts to display accurate product descriptions,
                                colors, and images, actual colors may vary due to screen
                                differences.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                7.3 Subscription Plans
                            </h3>
                            <p>
                                TripTrax offers monthly and annual subscriptions for our
                                membership tiers. Details and pricing are available on our
                                website.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                7.4 Automatic Renewal
                            </h3>
                            <p>
                                Subscription plans renew automatically at the current membership
                                tier unless canceled before the renewal date.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">7.5 Refunds</h3>
                            <p>
                                Digital and physical goods are generally non-refundable, except
                                where required by law or explicitly stated in our Refund Policy.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                7.6 Payment Processing
                            </h3>
                            <p>
                                Payments are processed by third party providers. TripTrax does
                                not store full credit card numbers.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="affiliate-links"
                            number="8."
                            title="Affiliate Links"
                        >
                            <p>
                                TripTrax participates in affiliate marketing programs. Some links
                                in your packages or on the website may generate commissions for
                                TripTrax at no additional cost to you. Affiliate relationships
                                do not influence package content or recommendations.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="third-party-services"
                            number="9."
                            title="Third Party Services & Data"
                        >
                            <p>The Services may integrate with or rely on:</p>
                            <PolicyList
                                items={[
                                    "Mapping APIs",
                                    "Weather data providers",
                                    "Trail and campground databases",
                                    "Affiliate partners",
                                    "Payment processors",
                                ]}
                            />

                            <p>
                                TripTrax is not responsible for the availability, accuracy, or
                                policies of third party services.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="intellectual-property"
                            number="10."
                            title="Intellectual Property"
                        >
                            <h3 className="mt-5 font-semibold text-foreground">
                                10.1 Ownership
                            </h3>
                            <p>
                                All content, branding, logos, software, and materials provided
                                through the Services are owned by TripTrax or its licensors.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                10.2 License for TripTrax Consumer-Series Subscribers
                            </h3>
                            <p>
                                For all TripTrax Core, Plus, Prime, and Elite subscribers, we
                                grant you a limited, non exclusive, non transferable license to
                                use the Services for personal, non commercial purposes.
                                Commercial use of our Services is strictly prohibited without
                                TripTrax's prior written consent.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                10.3 License for TripTrax Pro-Series Subscribers
                            </h3>
                            <p>
                                For all TripTrax Pro-series subscribers, we grant you a limited,
                                non exclusive, non transferable license to use the Services for
                                organizational, operational, and mission support purposes within
                                the subscriber's team, agency, or organization. This license
                                permits internal use only and does not allow resale,
                                redistribution, sublicensing, or use of the Services outside the
                                subscriber's organization. All organizational use is subject to
                                the subscriber's active Pro-series membership, and TripTrax
                                reserves the right to revoke access for misuse, unauthorized
                                sharing, or use beyond the scope of this license.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                10.4 Restrictions
                            </h3>
                            <p>
                                You may not copy, modify, distribute, or create derivative works
                                from the Services without written permission.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="user-content"
                            number="11."
                            title="User Content"
                        >
                            <p className="font-semibold text-foreground">
                                If you upload or submit content (photos, notes, reviews,
                                preferences, etc.):
                            </p>
                            <PolicyList
                                items={[
                                    "You retain ownership",
                                    "You grant TripTrax a license to use the content to provide and improve the Services",
                                    "You represent that you have the rights to submit the content",
                                ]}
                            />
                        </PolicySection>

                        <PolicySection
                            id="disclaimers"
                            number="12."
                            title="Disclaimers"
                        >
                            <h3 className="mt-5 font-semibold text-foreground">12.1 General</h3>
                            <p>
                                The Services are provided "as is" and "as available."
                            </p>
                            <p>
                                TripTrax makes no warranties, express or implied, including:
                            </p>
                            <PolicyList
                                items={[
                                    "Accuracy of AI generated content",
                                    "Safety of recommended routes",
                                    "Reliability of third party data",
                                    "Suitability for any specific activity",
                                    "Availability of digital or physical goods",
                                ]}
                            />

                            <h3 className="mt-5 font-semibold text-foreground">
                                12.2 Outdoor Activity Risks
                            </h3>
                            <p>
                                Outdoor activities involve inherent risks, including but not
                                limited to injury, illness, wildlife encounters, environmental
                                hazards, equipment failure, and unpredictable weather conditions.
                                TripTrax does not guarantee the safety, suitability, status,
                                condition, or accuracy of any recommended route, trail, campsite,
                                or location. You acknowledge that all outdoor decisions require
                                personal judgment, proper preparation, and adherence to local
                                regulations, land use rules, and safety advisories. You assume
                                full responsibility for your actions and agree that TripTrax is
                                not liable for any injuries, accidents, losses, or damages
                                arising from your participation in outdoor activities.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                12.3 Mission Brief Accuracy
                            </h3>
                            <p>
                                Mission briefs, operational summaries, hazard assessments, and
                                other mission support materials generated through TripTrax Pro
                                series tools may contain inaccuracies, omissions, outdated
                                information, or incomplete data. These materials are
                                informational only and are not a substitute for official SAR
                                protocols, certified training, or real time field verification.
                                You agree that all mission critical decisions must be based on
                                verified information, agency procedures, and the judgment of
                                qualified personnel. TripTrax is not responsible for operational
                                outcomes or any damages arising from reliance on mission support
                                materials.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                12.4 SAR Operational Use
                            </h3>
                            <p>
                                TripTrax Pro series tools, including mission support features,
                                are designed to assist Search and Rescue (SAR) teams with
                                planning, coordination, and information management. These tools
                                are informational only and are not a substitute for certified SAR
                                training, official Incident Command System (ICS) procedures, or
                                real time operational decision making. TripTrax does not provide
                                emergency services, dispatch capabilities, or guaranteed mission
                                critical data. All SAR operations must follow established agency
                                protocols, ICS guidelines, and the direction of qualified
                                personnel. TripTrax is not responsible for operational outcomes,
                                mission decisions, or any damages arising from reliance on Pro
                                series features.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                12.5 Weather & Environmental Data
                            </h3>
                            <p>
                                Weather forecasts, environmental insights, hazard summaries, and
                                related data provided through the Services are sourced from third
                                party providers and may be delayed, inaccurate, or incomplete.
                                Environmental conditions can change rapidly and without warning.
                                TripTrax does not guarantee the accuracy, timeliness, or
                                completeness of any weather or environmental information. You
                                agree to verify all critical conditions independently and
                                acknowledge that TripTrax is not liable for injuries, losses, or
                                damages resulting from reliance on weather or environmental data.
                            </p>

                            <h3 className="mt-5 font-semibold text-foreground">
                                12.6 No Emergency Guarantees
                            </h3>
                            <p>
                                TripTrax does not provide real time emergency monitoring,
                                emergency response, or life safety guarantees. TripTrax does not
                                track users, monitor field conditions, or communicate with
                                emergency services on your behalf. All information
                                provided—whether AI generated, human enhanced, or sourced from
                                third party data—is subject to delay, inaccuracy, or
                                incompleteness. You agree that TripTrax is not liable for any
                                harm, injury, or loss resulting from delayed information,
                                unavailable data, or reliance on the Services during an emergency.
                                In all emergency situations, you must contact local authorities
                                or appropriate rescue services immediately.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="limitation-of-liability"
                            number="13."
                            title="Limitation of Liability"
                        >
                            <p className="font-semibold text-foreground">
                                To the fullest extent permitted by law:
                            </p>
                            <PolicyList
                                items={[
                                    "TripTrax is not liable for any indirect, incidental, consequential, or punitive damages",
                                    "TripTrax is not liable for injuries, accidents, losses, or damages arising from outdoor activities",
                                    "TripTrax's total liability will not exceed the amount you paid in the past 12 months",
                                ]}
                            />

                            <p>
                                Some jurisdictions do not allow the exclusion of certain
                                warranties or limitations of liability. In such jurisdictions,
                                TripTrax's liability is limited to the maximum extent permitted
                                by law. You agree to use the Services at your own risk.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="indemnification"
                            number="14."
                            title="Indemnification"
                        >
                            <p className="font-semibold text-foreground">
                                You agree to indemnify and hold harmless TripTrax from any
                                claims, damages, losses, or expenses arising from:
                            </p>
                            <PolicyList
                                items={[
                                    "Your use of the Services",
                                    "Your violation of these Terms",
                                    "Your participation in outdoor activities",
                                ]}
                            />
                        </PolicySection>

                        <PolicySection
                            id="termination"
                            number="15."
                            title="Termination"
                        >
                            <p className="font-semibold text-foreground">
                                TripTrax may suspend or terminate your account if:
                            </p>
                            <PolicyList
                                items={[
                                    "You violate these Terms",
                                    "You engage in harmful or unlawful behavior",
                                    "You misuse the Services",
                                ]}
                            />

                            <p>
                                Upon termination, you will lose access to all digital goods,
                                packages, and membership benefits. You may terminate your own
                                account at any time and for any reason.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="governing-law"
                            number="16."
                            title="Governing Law"
                        >
                            <p>
                                These Terms are governed by the laws of the State of Tennessee,
                                without regard to conflict of law principles.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="changes-to-terms"
                            number="17."
                            title="Changes to These Terms"
                        >
                            <p>
                                We reserve the right to modify or update these Terms at any time.
                                Continued use of the Services after changes are posted
                                constitutes acceptance of the updated Terms.
                            </p>
                        </PolicySection>

                        <PolicySection
                            id="contact"
                            number="18."
                            title="Contact Information"
                        >
                            <p>
                                If you have any questions or concerns about these Terms, please
                                contact us at:
                            </p>

                            <div
                                className="
                  mt-5 rounded-lg border border-border
                  bg-card p-5 text-base
                "
                            >
                                <p className="font-semibold text-foreground">TripTrax Support</p>

                                <p className="mt-1">support@triptraxsa.com</p>
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