import {
    AtSign,
    Building2,
    Clock3,
    Phone,
    type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

type ContactItem = {
    title: string
    value: string
    icon: LucideIcon
}

const contactItems: ContactItem[] = [
    {
        title: 'Head office',
        value: 'Backpacker, Pacific Northwest',
        icon: Building2,
    },
    {
        title: 'Call centre',
        value: '+851 022010255',
        icon: Phone,
    },
    {
        title: 'Email',
        value: 'hello@apexadventurelab.com',
        icon: AtSign,
    },
    {
        title: 'Working Hours',
        value: 'Monday - Friday (07 am-05pm)',
        icon: Clock3,
    },
]

export default function ContactSection() {
    return (
        <section className="bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div
                className="
                    container grid items-stretch gap-12
                    lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)]
                    lg:gap-16 xl:gap-24
                "
            >
                {/* Left column */}
                <div className="flex flex-col">
                    {/* Heading */}
                    <div className="max-w-[540px]">
                        <h2
                            className="
                                text-4xl font-bold leading-tight
                                tracking-[-0.035em] text-foreground
                                sm:text-5xl
                            "
                        >
                            Get in{' '}
                            <span className="italic text-[#97B900]">
                                touch
                            </span>
                        </h2>

                        <p
                            className="
                                mt-6 max-w-[510px]
                                text-sm leading-[1.6]
                                text-muted-foreground
                                sm:text-base
                            "
                        >
                            Let&apos;s start the conversation. Whether you have
                            a question about a dossier, membership, partnership
                            opportunity, or upcoming expedition, our team is
                            here to help.
                        </p>
                    </div>

                    {/* Contact information */}
                    <div
                        className="
                            mt-12 grid gap-4
                            sm:grid-cols-2
                            lg:mt-auto
                        "
                    >
                        {contactItems.map((item) => {
                            const Icon = item.icon

                            return (
                                <article
                                    key={item.title}
                                    className="
                                        flex min-h-[84px] items-center gap-4
                                        rounded-xl border border-border
                                        bg-card px-4 py-3
                                        transition-[border-color,box-shadow,transform]
                                        duration-300 ease-out
                                        hover:-translate-y-0.5
                                        hover:border-[#97B900]/40
                                        hover:shadow-sm
                                    "
                                >
                                    <div
                                        className="
                                            flex size-11 shrink-0
                                            items-center justify-center
                                            rounded-lg bg-icon-bg
                                        "
                                    >
                                        <Icon
                                            className="size-6 text-[#97B900]"
                                            strokeWidth={2.4}
                                        />
                                    </div>

                                    <div className="min-w-0">
                                        <h3
                                            className="
                                                text-base font-semibold
                                                leading-tight text-foreground
                                            "
                                        >
                                            {item.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-1 break-words
                                                text-xs leading-relaxed
                                                text-muted-foreground
                                                sm:text-[13px]
                                            "
                                        >
                                            {item.value}
                                        </p>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>

                {/* Contact form */}
                <div
                    className="
                        relative overflow-hidden
                        rounded-[18px]
                        border border-border
                        border-t-[8px] border-t-[#97B900]
                        bg-card
                        p-5
                        shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)]
                        sm:p-6
                    "
                >
                    {/* Soft form background */}
                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none absolute inset-0
                            bg-[linear-gradient(145deg,rgba(255,255,255,0.7),rgba(246,246,246,0.88))]
                        "
                    />

                    <form className="relative space-y-5">
                        {/* Full name */}
                        <div className="space-y-2">
                            <label
                                htmlFor="fullName"
                                className="
                                    block text-sm font-medium
                                    text-foreground
                                "
                            >
                                Full name
                            </label>

                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Alex Johnson"
                                autoComplete="name"
                                className="
                                    h-12 w-full rounded-xl
                                    border border-border bg-white
                                    px-4 text-sm text-foreground
                                    outline-none
                                    transition-[border-color,box-shadow]
                                    duration-200
                                    placeholder:text-muted-foreground/70
                                    focus:border-[#97B900]
                                    focus:ring-4 focus:ring-[#97B900]/10
                                "
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label
                                htmlFor="email"
                                className="
                                    block text-sm font-medium
                                    text-foreground
                                "
                            >
                                Email address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                className="
                                    h-12 w-full rounded-xl
                                    border border-border bg-white
                                    px-4 text-sm text-foreground
                                    outline-none
                                    transition-[border-color,box-shadow]
                                    duration-200
                                    placeholder:text-muted-foreground/70
                                    focus:border-[#97B900]
                                    focus:ring-4 focus:ring-[#97B900]/10
                                "
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="
                                    block text-sm font-medium
                                    text-foreground
                                "
                            >
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell us what's on your mind ..."
                                rows={5}
                                className="
                                    min-h-[122px] w-full resize-none
                                    rounded-xl border border-border
                                    bg-white px-4 py-3
                                    text-sm text-foreground
                                    outline-none
                                    transition-[border-color,box-shadow]
                                    duration-200
                                    placeholder:text-muted-foreground/70
                                    focus:border-[#97B900]
                                    focus:ring-4 focus:ring-[#97B900]/10
                                "
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            fullWidth
                        >
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}